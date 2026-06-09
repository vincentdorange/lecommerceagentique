import Link from 'next/link'
import { ReactNode } from 'react'

export default function LegalLayout({
  title,
  eyebrow,
  updatedAt,
  children,
}: {
  title: string
  eyebrow: string
  updatedAt: string
  children: ReactNode
}) {
  return (
    <main>
      <header
        style={{
          borderBottom: '1px solid var(--border)',
          padding: '18px 0',
          position: 'sticky',
          top: 0,
          background: 'rgba(5, 12, 26, 0.78)',
          backdropFilter: 'blur(20px)',
          zIndex: 50,
        }}
      >
        <div className="container-x" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: 38, height: 38, background: 'var(--gold)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'var(--navy)', fontSize: 12, letterSpacing: '0.06em', fontFamily: "'Space Grotesk', sans-serif" }}>LCA</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif" }}>Le Commerce Agentique</div>
              <div style={{ fontSize: 9.5, color: 'var(--gold)', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>Décrypter le commerce des agents IA</div>
            </div>
          </Link>
          <Link href="/" className="badge" style={{ padding: '7px 14px' }}>← Retour à l'accueil</Link>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="container-narrow">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-2" style={{ marginBottom: 16 }}>{title}</h1>
          <p style={{ fontSize: 13, color: 'var(--gray-3)', letterSpacing: '0.04em' }}>
            Dernière mise à jour : <time>{updatedAt}</time>
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 120px' }}>
        <div
          className="container-narrow"
          style={{
            fontSize: 15,
            color: 'var(--gray-1)',
            lineHeight: 1.75,
          }}
        >
          {children}
        </div>
      </section>

      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border)', background: 'var(--navy-2)' }}>
        <div className="container-x" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 12, color: 'var(--gray-3)' }}>
          <div>© 2026 Le Commerce Agentique — Édité par ACF®.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/mentions-legales" style={{ color: 'var(--gray-3)' }}>Mentions légales</Link>
            <Link href="/politique-confidentialite" style={{ color: 'var(--gray-3)' }}>Confidentialité</Link>
            <Link href="/cgu" style={{ color: 'var(--gray-3)' }}>CGU</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
