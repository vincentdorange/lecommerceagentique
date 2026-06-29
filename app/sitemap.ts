import type { MetadataRoute } from 'next'
import { ARTICLE_CONTENT } from './articles/[slug]/articles-content'

// Sitemap re-generated server-side on each request (revalidate every hour).
// Articles come from the static `ARTICLE_CONTENT` table; the news feed page
// (/veille) is itself a regularly-updated page and is included with the most
// recent news timestamp.
export const revalidate = 3600

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://lecommerceagentique.fr'
  const now = new Date()

  // ─── Most recent article publication = freshness signal for the home ───
  const articleDates = Object.values(ARTICLE_CONTENT)
    .map((a) => new Date(a.publishedAt))
    .filter((d) => !Number.isNaN(d.getTime()))
  const latestArticleDate = articleDates.length
    ? new Date(Math.max(...articleDates.map((d) => d.getTime())))
    : now

  // Pages publiques canoniques (sans ancres — Google ignore les fragments).
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: latestArticleDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${base}/veille`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${base}/methodologie`,
      lastModified: new Date('2026-06-09'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: new Date('2026-06-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/politique-confidentialite`,
      lastModified: new Date('2026-06-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/cgu`,
      lastModified: new Date('2026-06-09'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const articlePages: MetadataRoute.Sitemap = Object.entries(ARTICLE_CONTENT).map(
    ([slug, article]) => ({
      url: `${base}/articles/${slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })
  )

  return [...staticPages, ...articlePages]
}
