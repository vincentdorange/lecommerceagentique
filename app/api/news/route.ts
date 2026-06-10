/**
 * GET /api/news
 * Public read of visible news entries. Used by /veille SSR and for debugging.
 * Returns up to 100 most recent visible entries.
 *
 * GET /api/news?all=1&token=ADMIN_SECRET — diagnostic mode, returns all rows
 * (including future + inactive) for the admin dashboard / debugging.
 */
import { NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'
import { getSupabaseServer, isSupabaseConfigured } from '@/lib/supabase-server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function safeEquals(a: string, b: string): boolean {
  if (!a || !b) return false
  const aBuf = Buffer.from(a)
  const bBuf = Buffer.from(b)
  if (aBuf.length !== bBuf.length) return false
  try {
    return timingSafeEqual(aBuf, bBuf)
  } catch {
    return false
  }
}

export async function GET(req: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ ok: false, error: 'backend_not_configured' }, { status: 503 })
  }

  const url = new URL(req.url)
  const all = url.searchParams.get('all') === '1'
  const token = url.searchParams.get('token') || ''
  const adminSecret = process.env.ADMIN_SECRET || ''
  const isAdmin = all && safeEquals(token, adminSecret)

  const supabase = getSupabaseServer()!

  if (isAdmin) {
    const { data, error, count } = await supabase
      .from('news_ticker')
      .select('*', { count: 'exact' })
      .order('display_after', { ascending: false })
    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || error.code },
        { status: 500 },
      )
    }
    return NextResponse.json({ ok: true, mode: 'admin', total: count ?? 0, entries: data || [] })
  }

  // Public mode: only visible (active + display_after <= now)
  const { data, error, count } = await supabase
    .from('news_ticker')
    .select('*', { count: 'exact' })
    .eq('active', true)
    .lte('display_after', new Date().toISOString())
    .order('published_at', { ascending: false })
    .limit(100)
  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message || error.code },
      { status: 500 },
    )
  }
  return NextResponse.json({ ok: true, mode: 'public', total: count ?? 0, entries: data || [] })
}
