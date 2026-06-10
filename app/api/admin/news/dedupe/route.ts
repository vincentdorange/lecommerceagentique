/**
 * POST /api/admin/news/dedupe
 * Removes duplicate news entries (by exact title match), keeping the oldest one.
 * Hard delete to keep the table clean.
 *
 * Auth: Bearer ADMIN_SECRET.
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

function authorized(req: Request): boolean {
  const auth = req.headers.get('authorization') || ''
  const expected = process.env.ADMIN_SECRET
  if (!expected || !auth.startsWith('Bearer ')) return false
  return safeEquals(auth.slice(7), expected)
}

export async function POST(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  }
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ ok: false, error: 'backend_not_configured' }, { status: 503 })
  }

  const supabase = getSupabaseServer()!

  // Get all rows ordered by created_at ASC
  const { data: rows, error } = await supabase
    .from('news_ticker')
    .select('id, title, created_at')
    .order('created_at', { ascending: true })

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  if (!rows || rows.length === 0) {
    return NextResponse.json({ ok: true, deleted: 0, kept: 0, message: 'empty table' })
  }

  // Identify dupes by title (keep first occurrence)
  const seen = new Set<string>()
  const toDelete: string[] = []
  for (const row of rows) {
    if (seen.has(row.title)) {
      toDelete.push(row.id)
    } else {
      seen.add(row.title)
    }
  }

  if (toDelete.length === 0) {
    return NextResponse.json({
      ok: true,
      deleted: 0,
      kept: rows.length,
      message: 'no duplicates found',
    })
  }

  // Hard delete the duplicates in chunks of 100
  let totalDeleted = 0
  for (let i = 0; i < toDelete.length; i += 100) {
    const chunk = toDelete.slice(i, i + 100)
    const { error: delErr } = await supabase.from('news_ticker').delete().in('id', chunk)
    if (delErr) {
      return NextResponse.json(
        {
          ok: false,
          error: delErr.message,
          partial: { deletedSoFar: totalDeleted, remaining: toDelete.length - totalDeleted },
        },
        { status: 500 },
      )
    }
    totalDeleted += chunk.length
  }

  return NextResponse.json({
    ok: true,
    deleted: totalDeleted,
    kept: rows.length - totalDeleted,
    uniqueTitles: seen.size,
  })
}
