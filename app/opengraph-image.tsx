import { ImageResponse } from 'next/og'

// Open Graph image for the home page + fallback site-wide when no per-page
// OG image is defined. Static at build via Node runtime (Edge isn't required
// for a single image; we get caching for free this way).
export const alt = 'Le Commerce Agentique — Le média francophone du commerce assisté par agents IA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: 80,
          backgroundColor: '#050c1a',
          backgroundImage:
            'radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.18) 0%, transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(13,31,60,0.65) 0%, transparent 60%)',
          color: '#f4f1ea',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Header / brand mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#c9a84c',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0d1f3c',
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 1.5,
            }}
          >
            LCA
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>Le Commerce Agentique</div>
            <div
              style={{
                fontSize: 14,
                color: '#c9a84c',
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              Décrypter le commerce des agents IA
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: 40,
          }}
        >
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Le commerce
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: '#c9a84c',
            }}
          >
            agentique.
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#a8b1c2',
              marginTop: 28,
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Le média francophone du a-commerce — études, glossaire, classement
            des protocoles, veille internationale.
          </div>
        </div>

        {/* Tag row */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 'auto' }}>
          {['MCP', 'ACP', 'TAP', 'Agent Pay', 'Operator', 'Mariner', 'ACF®'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '10px 18px',
                borderRadius: 999,
                border: '1px solid rgba(201,168,76,0.45)',
                color: '#c9a84c',
                fontSize: 18,
                fontWeight: 600,
                backgroundColor: 'rgba(201,168,76,0.08)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
