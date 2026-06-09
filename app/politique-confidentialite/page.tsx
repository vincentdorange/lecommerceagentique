import type { Metadata } from 'next'
import LegalLayout from '../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et gestion des cookies du site Le Commerce Agentique. RGPD compliant.',
  alternates: { canonical: 'https://lecommerceagentique.fr/politique-confidentialite' },
}

const H2: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 22,
  fontWeight: 700,
  letterSpacing: '-0.015em',
  marginTop: 40,
  marginBottom: 16,
  color: 'var(--white)',
}

const H3: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 17,
  fontWeight: 600,
  marginTop: 24,
  marginBottom: 8,
  color: 'var(--white)',
}

export default function Page() {
  return (
    <LegalLayout title="Politique de confidentialité" eyebrow="RGPD · Cookies" updatedAt="9 juin 2026">
      <p>
        Le Site <strong>lecommerceagentique.fr</strong> respecte la vie privée de ses lecteurs et se conforme au Règlement (UE) 2016/679 (RGPD) et à la loi française Informatique et Libertés.
        Cette politique décrit les données collectées, leur utilisation, et vos droits.
      </p>

      <h2 style={H2}>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement est <strong>Vincent Dorange</strong>, Villa Victoria, 657B chemin de la Rampe, 06220 Vallauris, France.
        <br />
        Email : <a href="mailto:contact@acfstandard.com" style={{ color: 'var(--gold)' }}>contact@acfstandard.com</a>
      </p>

      <h2 style={H2}>2. Données collectées et finalités</h2>

      <h3 style={H3}>2.1 Navigation simple (par défaut)</h3>
      <p>
        Aucune donnée personnelle n'est collectée par défaut. Le Site fonctionne sans authentification ni profil utilisateur.
      </p>

      <h3 style={H3}>2.2 Mesure d'audience (avec consentement)</h3>
      <p>
        Si vous donnez votre consentement via la bannière cookies, le Site utilise <strong>Vercel Analytics</strong> pour mesurer la fréquentation. Les données collectées sont anonymisées (pas d'adresse IP en clair, pas de cookies persistants).
      </p>
      <ul style={{ paddingLeft: 24, marginTop: 12 }}>
        <li>Base légale : consentement (article 6.1.a RGPD)</li>
        <li>Durée de conservation : 13 mois maximum</li>
        <li>Destinataire : Vercel Inc. (sous-traitant)</li>
      </ul>

      <h3 style={H3}>2.3 Newsletter « Le Brief A-commerce »</h3>
      <p>
        Si vous vous abonnez à la newsletter, votre adresse email est collectée et stockée localement dans votre navigateur (V1.0).
        Une version backend sera déployée prochainement avec stockage sécurisé chez Supabase (Frankfurt, UE).
      </p>
      <ul style={{ paddingLeft: 24, marginTop: 12 }}>
        <li>Base légale : consentement (article 6.1.a RGPD)</li>
        <li>Finalité : envoi de la newsletter hebdomadaire</li>
        <li>Durée de conservation : jusqu'à désinscription par le lecteur</li>
        <li>Destinataires : éditeur uniquement, jamais partagés à des tiers</li>
      </ul>

      <h2 style={H2}>3. Cookies utilisés</h2>
      <p>Le Site utilise les cookies suivants :</p>

      <div style={{ marginTop: 16, marginBottom: 16, border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--navy-2)', color: 'var(--gold)' }}>
              <th style={{ padding: 12, textAlign: 'left', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12 }}>Cookie</th>
              <th style={{ padding: 12, textAlign: 'left', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12 }}>Finalité</th>
              <th style={{ padding: 12, textAlign: 'left', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12 }}>Durée</th>
              <th style={{ padding: 12, textAlign: 'left', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12 }}>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: '1px solid var(--border)' }}>
              <td style={{ padding: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>lca-cookie-consent-v1</td>
              <td style={{ padding: 12 }}>Mémoriser votre choix sur les cookies</td>
              <td style={{ padding: 12 }}>12 mois</td>
              <td style={{ padding: 12, color: 'var(--gold)' }}>Nécessaire</td>
            </tr>
            <tr style={{ borderTop: '1px solid var(--border)' }}>
              <td style={{ padding: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>_vercel_analytics</td>
              <td style={{ padding: 12 }}>Mesure anonyme de la fréquentation</td>
              <td style={{ padding: 12 }}>Session</td>
              <td style={{ padding: 12, color: 'var(--gray-2)' }}>Optionnel</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Aucun cookie publicitaire, aucun pixel de tracking tiers, aucun cookie marketing n'est utilisé sur ce Site.</p>

      <h2 style={H2}>4. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez à tout moment des droits suivants :</p>
      <ul style={{ paddingLeft: 24, marginTop: 12 }}>
        <li><strong>Droit d'accès</strong> : connaître les données vous concernant</li>
        <li><strong>Droit de rectification</strong> : corriger les données inexactes</li>
        <li><strong>Droit à l'effacement</strong> (« droit à l'oubli ») : supprimer vos données</li>
        <li><strong>Droit à la limitation</strong> du traitement</li>
        <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format ouvert</li>
        <li><strong>Droit d'opposition</strong> au traitement</li>
        <li><strong>Droit de retirer votre consentement</strong> à tout moment</li>
      </ul>
      <p style={{ marginTop: 12 }}>
        Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@acfstandard.com" style={{ color: 'var(--gold)' }}>contact@acfstandard.com</a>.
      </p>
      <p style={{ marginTop: 12 }}>
        En cas de litige, vous pouvez saisir la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener" style={{ color: 'var(--gold)' }}>cnil.fr</a>.
      </p>

      <h2 style={H2}>5. Modifications</h2>
      <p>
        Cette politique peut évoluer. La version en vigueur est celle publiée sur cette page. Toute modification substantielle sera signalée en page d'accueil.
      </p>
    </LegalLayout>
  )
}
