import { ImageResponse } from 'next/og'
import { ARTICLE_CONTENT } from './articles-content'

// Default Node runtime so we can pre-render every article OG at build via
// generateStaticParams (Edge runtime would forbid it). Node runtime is the
// recommended path in Next 16 for OG images alongside pre-rendered routes.
export const alt = 'Le Commerce Agentique — article'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function ArticleOGImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const a = ARTICLE_CONTENT[slug]
  const title = a?.title ?? 'Le Commerce Agentique'
  const desc = a?.desc ?? 'Le média francophone du a-commerce.'
  const category = a?.category ?? 'Article'
  const author = a?.author ?? 'Rédaction LCA'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: 70,
          backgroundColor: '#050c1a',
          backgroundImage:
            'radial-gradient(ellipse at 90% 10%, rgba(201,168,76,0.20) 0%, transparent 55%), radial-gradient(ellipse at 5% 95%, rgba(13,31,60,0.55) 0%, transparent 60%)',
          color: '#f4f1ea',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              backgroundColor: '#c9a84c',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0d1f3c',
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: 1.5,
            }}
          >
            LCA
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>Le Commerce Agentique</div>
            <div
              style={{
                fontSize: 12,
                color: '#c9a84c',
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                fontWeight: 600,
                marginTop: 2,
              }}
            >
              lecommerceagentique.fr
            </div>
          </div>
        </div>

        {/* Category chip */}
        <div style={{ display: 'flex', marginTop: 38 }}>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 999,
              backgroundColor: 'rgba(201,168,76,0.16)',
              color: '#c9a84c',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            marginTop: 22,
            color: '#ffffff',
          }}
        >
          {title.length > 110 ? title.slice(0, 107) + '…' : title}
        </div>

        {/* Description */}
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#a8b1c2',
            lineHeight: 1.4,
            marginTop: 22,
            maxWidth: 1020,
          }}
        >
          {desc.length > 180 ? desc.slice(0, 177) + '…' : desc}
        </div>

        {/* Author / footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 'auto',
            paddingTop: 28,
            borderTop: '1px solid rgba(201,168,76,0.32)',
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 999,
              backgroundColor: 'rgba(201,168,76,0.18)',
              border: '1px solid rgba(201,168,76,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#c9a84c',
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            {author.slice(0, 1)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#f4f1ea' }}>{author}</div>
            <div style={{ fontSize: 13, color: '#8893a8' }}>Édité par ACF® · Le média du a-commerce</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
