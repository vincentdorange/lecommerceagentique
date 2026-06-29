import { ARTICLE_CONTENT } from '../articles/[slug]/articles-content'
import { fetchVisibleNews } from '@/lib/news'
import { escHtml } from '@/lib/esc-html'

export const runtime = 'nodejs'
// Revalidate every 30 minutes — RSS aggregators poll frequently and Supabase
// news may move between polls.
export const revalidate = 1800

const BASE = 'https://lecommerceagentique.fr'

// Strip the in-page block structure down to a paragraph stream, then trim to
// a short description (RSS readers truncate anyway).
function articleSummary(slug: string): string {
  const a = ARTICLE_CONTENT[slug]
  if (!a) return ''
  const paragraphs = a.body
    .filter((b) => b.t === 'p')
    .map((b) => (b as { c: string }).c)
  const full = paragraphs.join(' ').replace(/\s+/g, ' ').trim()
  return full.slice(0, 600) + (full.length > 600 ? '…' : '')
}

function articleFullHtml(slug: string): string {
  const a = ARTICLE_CONTENT[slug]
  if (!a) return ''
  return a.body
    .map((b) => {
      if (b.t === 'p') return `<p>${escHtml(b.c)}</p>`
      if (b.t === 'h2') return `<h2>${escHtml(b.c)}</h2>`
      if (b.t === 'h3') return `<h3>${escHtml(b.c)}</h3>`
      if (b.t === 'ul')
        return `<ul>${b.items.map((it) => `<li>${escHtml(it)}</li>`).join('')}</ul>`
      if (b.t === 'quote')
        return `<blockquote>${escHtml(b.c)}${
          b.author ? `<footer>— ${escHtml(b.author)}</footer>` : ''
        }</blockquote>`
      if (b.t === 'callout')
        return `<div><strong>${escHtml(b.label || 'À retenir')}</strong> ${escHtml(b.c)}</div>`
      return ''
    })
    .join('\n')
}

function rfc822(dateStr: string | Date): string {
  const d = typeof dateStr === 'string' ? new Date(dateStr) : dateStr
  return d.toUTCString()
}

export async function GET() {
  // ─── Articles ───
  const articles = Object.entries(ARTICLE_CONTENT)
    .map(([slug, a]) => ({
      slug,
      title: a.title,
      desc: a.desc,
      author: a.author,
      category: a.category,
      tags: a.tags,
      publishedAt: a.publishedAt,
    }))
    .sort(
      (x, y) =>
        new Date(y.publishedAt).getTime() - new Date(x.publishedAt).getTime()
    )

  // ─── News ticker (up to 30 most recent visible entries) ───
  let news: Awaited<ReturnType<typeof fetchVisibleNews>> = []
  try {
    news = await fetchVisibleNews(30)
  } catch {
    news = []
  }

  const articleItems = articles.map((a) => {
    const url = `${BASE}/articles/${a.slug}`
    const ogImage = `${BASE}/articles/${a.slug}/opengraph-image`
    const summary = articleSummary(a.slug)
    const fullHtml = articleFullHtml(a.slug)
    return `<item>
  <title>${escHtml(a.title)}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <pubDate>${rfc822(a.publishedAt)}</pubDate>
  <dc:creator>${escHtml(a.author)}</dc:creator>
  <category>${escHtml(a.category)}</category>
  ${a.tags.map((t) => `<category>${escHtml(t)}</category>`).join('\n  ')}
  <description>${escHtml(summary)}</description>
  <content:encoded><![CDATA[${fullHtml}]]></content:encoded>
  <enclosure url="${ogImage}" type="image/png" />
  <media:content url="${ogImage}" type="image/png" medium="image" width="1200" height="630" />
  <media:thumbnail url="${ogImage}" width="1200" height="630" />
</item>`
  })

  const newsItems = news.map((n) => {
    // News entries point either to source_url (external) or our /veille page.
    const url = n.source_url || `${BASE}/veille#${n.id}`
    return `<item>
  <title>${escHtml(`[VEILLE] ${n.title}`)}</title>
  <link>${url}</link>
  <guid isPermaLink="false">lca-news-${n.id}</guid>
  <pubDate>${rfc822(n.published_at)}</pubDate>
  <dc:creator>${escHtml(n.source_name || 'Rédaction LCA')}</dc:creator>
  <category>${escHtml(n.category)}</category>
  <description>${escHtml(n.snippet)}</description>
</item>`
  })

  const lastBuildDate = rfc822(
    articles.length
      ? articles[0].publishedAt
      : new Date().toISOString()
  )

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
<channel>
<title>Le Commerce Agentique</title>
<link>${BASE}</link>
<description>Le média francophone du commerce assisté par agents IA. Études, glossaire, classement des protocoles, veille internationale, gouvernance.</description>
<language>fr-FR</language>
<copyright>© 2026 Le Commerce Agentique — Licence Creative Commons BY 4.0</copyright>
<managingEditor>contact@acfstandard.com (Rédaction LCA)</managingEditor>
<webMaster>contact@acfstandard.com (Rédaction LCA)</webMaster>
<lastBuildDate>${lastBuildDate}</lastBuildDate>
<generator>Next.js — lecommerceagentique.fr</generator>
<atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
<image>
  <url>${BASE}/opengraph-image</url>
  <title>Le Commerce Agentique</title>
  <link>${BASE}</link>
  <width>1200</width>
  <height>630</height>
</image>
${articleItems.join('\n')}
${newsItems.join('\n')}
</channel>
</rss>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=1800, s-maxage=1800',
    },
  })
}
