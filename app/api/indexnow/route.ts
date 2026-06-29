/**
 * POST /api/indexnow
 *
 * Notifie IndexNow (Bing, Yandex, Naver, Seznam, Cloudflare) d'un changement
 * d'URL sur lecommerceagentique.fr. À appeler après publication d'un article
 * ou en bulk depuis un script externe avec la liste des URLs du sitemap.
 *
 * Body JSON : { "urls": ["https://lecommerceagentique.fr/articles/...", ...] }
 * Limite IndexNow : 10 000 URLs max par requête.
 *
 * Key IndexNow : 2b985334cb1a42098b1eaf327277857e
 * Fichier de preuve : public/2b985334cb1a42098b1eaf327277857e.txt
 *
 * Sécurité : protégé par `ADMIN_SECRET` (header `x-admin-secret` ou body field
 * `token`). Sans ce secret, l'endpoint refuse — sinon n'importe qui pourrait
 * forcer IndexNow à indexer (et potentiellement déclasser) des URLs valides.
 *
 * Doc : https://www.indexnow.org
 */
import { NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const INDEXNOW_KEY = '2b985334cb1a42098b1eaf327277857e'
const HOST = 'lecommerceagentique.fr'
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`

// Ping vers le réseau IndexNow (le réseau propage automatiquement aux autres
// participants : Bing, Yandex, Naver, Seznam, Cloudflare, etc.).
const ENDPOINTS = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/IndexNow',
]

interface RequestBody {
  urls?: string[]
  token?: string
}

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

export async function POST(req: Request) {
  let body: RequestBody
  try {
    body = (await req.json()) as RequestBody
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  // Auth: header or body token compared in constant time to ADMIN_SECRET.
  const adminSecret = process.env.ADMIN_SECRET || ''
  const headerToken = req.headers.get('x-admin-secret') || ''
  const bodyToken = body.token || ''
  if (!adminSecret) {
    return NextResponse.json({ error: 'admin_secret_not_configured' }, { status: 503 })
  }
  if (!safeEquals(headerToken, adminSecret) && !safeEquals(bodyToken, adminSecret)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const urls = Array.isArray(body.urls) ? body.urls : []
  if (urls.length === 0 || urls.length > 10000) {
    return NextResponse.json(
      { error: 'urls_required_max_10000' },
      { status: 400 },
    )
  }

  // Tous les URLs doivent appartenir au host déclaré.
  for (const u of urls) {
    try {
      const parsed = new URL(u)
      if (parsed.hostname !== HOST) {
        return NextResponse.json(
          { error: 'urls_must_be_same_host', host: HOST },
          { status: 400 },
        )
      }
    } catch {
      return NextResponse.json({ error: 'invalid_url' }, { status: 400 })
    }
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }

  const results = await Promise.all(
    ENDPOINTS.map(async (endpoint) => {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(payload),
        })
        return { endpoint, status: res.status }
      } catch (err) {
        return {
          endpoint,
          status: 0,
          error: err instanceof Error ? err.message : 'network_error',
        }
      }
    }),
  )

  return NextResponse.json({
    submitted: urls.length,
    host: HOST,
    results,
  })
}
