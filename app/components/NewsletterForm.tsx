'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    // V1.0: capture locale uniquement, backend à venir
    try {
      const existing = JSON.parse(localStorage.getItem('lca-newsletter-leads') || '[]')
      existing.push({ email, ts: new Date().toISOString() })
      localStorage.setItem('lca-newsletter-leads', JSON.stringify(existing))
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 520 }}>
      {status === 'success' ? (
        <div
          style={{
            padding: '20px 24px',
            background: 'var(--gold-dim)',
            border: '1px solid var(--gold)',
            borderRadius: 12,
            color: 'var(--gold)',
            fontSize: 15,
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
          ✓ Bienvenue. Le prochain brief arrive lundi 8h.
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder="votre@email.com"
              required
              style={{
                flex: '1 1 240px',
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-strong)',
                borderRadius: 10,
                color: 'var(--white)',
                fontSize: 15,
                fontFamily: 'inherit',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              className="btn-gold"
              disabled={status === 'submitting'}
              style={{ padding: '14px 24px', fontSize: 14, opacity: status === 'submitting' ? 0.6 : 1 }}
            >
              {status === 'submitting' ? '…' : "S'abonner"}
            </button>
          </div>
          {status === 'error' && (
            <p style={{ fontSize: 12, color: '#f87171', marginTop: 8 }}>
              Email invalide ou enregistrement échoué.
            </p>
          )}
          <p style={{ fontSize: 11, color: 'var(--gray-3)', marginTop: 12, lineHeight: 1.5 }}>
            Pas de spam, désinscription en 1 clic. Vos données ne sont pas partagées.
            Voir la <a href="/politique-confidentialite" style={{ color: 'var(--gold)' }}>politique de confidentialité</a>.
          </p>
        </>
      )}
    </form>
  )
}
