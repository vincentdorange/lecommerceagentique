'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'lca-cookie-consent-v1'

type Consent = {
  necessary: true
  analytics: boolean
  marketing: boolean
  ts: string
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_KEY)
      if (!saved) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const persist = (c: Consent) => {
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify(c))
    } catch {
      /* silent fail */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        maxWidth: 640,
        margin: '0 auto',
        zIndex: 100,
        background: 'rgba(13, 31, 60, 0.96)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--gold-glow)',
        borderRadius: 16,
        padding: 24,
        boxShadow: '0 24px 64px -16px rgba(0,0,0,0.6), 0 0 32px var(--gold-dim)',
      }}
    >
      {!showCustomize ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span className="dot" />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700 }}>
              Cookies & vie privée
            </h3>
          </div>
          <p style={{ fontSize: 13, color: 'var(--gray-1)', lineHeight: 1.6, marginBottom: 16 }}>
            Nous utilisons des cookies strictement nécessaires au fonctionnement du site, et — avec votre consentement —
            des outils d'analyse d'audience (Vercel Analytics) pour comprendre comment le contenu est consulté. Aucun
            cookie tiers marketing, aucun pixel publicitaire.
            <Link href="/politique-confidentialite" style={{ color: 'var(--gold)', textDecoration: 'underline', marginLeft: 4 }}>
              En savoir plus
            </Link>.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={() => persist({ necessary: true, analytics: true, marketing: false, ts: new Date().toISOString() })}
              className="btn-gold"
              style={{ padding: '12px 20px', fontSize: 13 }}
            >
              Tout accepter
            </button>
            <button
              onClick={() => persist({ necessary: true, analytics: false, marketing: false, ts: new Date().toISOString() })}
              className="btn-ghost"
              style={{ padding: '12px 20px', fontSize: 13 }}
            >
              Refuser
            </button>
            <button
              onClick={() => setShowCustomize(true)}
              style={{
                padding: '12px 20px',
                fontSize: 13,
                background: 'transparent',
                color: 'var(--gray-1)',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Personnaliser
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span className="dot" />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700 }}>
              Personnaliser les cookies
            </h3>
          </div>
          <div style={{ display: 'grid', gap: 12, marginBottom: 20 }}>
            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'not-allowed', opacity: 0.7 }}>
              <input type="checkbox" checked disabled style={{ marginTop: 3 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Strictement nécessaires</div>
                <div style={{ fontSize: 12, color: 'var(--gray-2)' }}>Sécurité, préférences. Toujours actif.</div>
              </div>
            </label>
            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                style={{ marginTop: 3, accentColor: 'var(--gold)' }}
              />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Mesure d'audience</div>
                <div style={{ fontSize: 12, color: 'var(--gray-2)' }}>Vercel Analytics, anonymisé.</div>
              </div>
            </label>
            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                style={{ marginTop: 3, accentColor: 'var(--gold)' }}
              />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Marketing</div>
                <div style={{ fontSize: 12, color: 'var(--gray-2)' }}>Aucun pixel tiers actif aujourd'hui.</div>
              </div>
            </label>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button
              onClick={() => persist({ necessary: true, analytics, marketing, ts: new Date().toISOString() })}
              className="btn-gold"
              style={{ padding: '12px 20px', fontSize: 13 }}
            >
              Enregistrer mes choix
            </button>
            <button
              onClick={() => setShowCustomize(false)}
              className="btn-ghost"
              style={{ padding: '12px 20px', fontSize: 13 }}
            >
              ← Retour
            </button>
          </div>
        </>
      )}
    </div>
  )
}
