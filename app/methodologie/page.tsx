import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Méthodologie du classement — Le Commerce Agentique',
  description: "Comment Le Commerce Agentique évalue les 8 protocoles a-commerce : 5 critères pondérés, sources publiques, mise à jour mensuelle. Méthodologie complète et transparente.",
  alternates: { canonical: 'https://lecommerceagentique.fr/methodologie' },
  openGraph: {
    type: 'article',
    url: 'https://lecommerceagentique.fr/methodologie',
    siteName: 'Le Commerce Agentique',
    title: 'Méthodologie du classement LCA',
    description: "5 critères pondérés, sources publiques, mise à jour mensuelle. Méthodologie complète et transparente.",
    locale: 'fr_FR',
  },
  robots: { index: true, follow: true },
}

const CRITERIA = [
  {
    key: 'gouv',
    label: 'Gouvernance',
    weight: 30,
    rationale: "Premier critère parce qu'un protocole a-commerce qui n'encadre pas l'autonomie de l'agent n'est pas un standard, c'est un risque opérationnel transformé en produit.",
    indicators: [
      "Définition explicite des niveaux d'autonomie (de la suggestion à la décision finale)",
      "Mécanismes de supervision humaine (validation, escalade, alerte)",
      "Présence d'un kill switch documenté et testable",
      "Désignation d'un rôle responsable (type DDAO, DPO ou équivalent)",
      "Traçabilité des décisions critiques et règles d'audit",
    ],
  },
  {
    key: 'conf',
    label: 'Conformité EU',
    weight: 25,
    rationale: "L'EU AI Act entre en enforcement haut-risque le 2 décembre 2027 pour les agents en classe Annexe III. RGPD et eIDAS sont déjà en vigueur. Un protocole non aligné est inutilisable en Europe.",
    indicators: [
      "Compatibilité documentée avec l'EU AI Act (classification, obligations, transparence)",
      "Compatibilité RGPD (minimisation des données, base légale, droits utilisateurs)",
      "Audit trail compatible eIDAS (horodatage qualifié, signatures qualifiées)",
      "Mécanisme d'effacement et de portabilité des données",
      "Documentation publique en français ou anglais accessible à l'autorité de contrôle",
    ],
  },
  {
    key: 'ouv',
    label: 'Ouverture',
    weight: 20,
    rationale: "Un standard fermé verrouille les implémenteurs et empêche l'audit indépendant. L'ouverture est ce qui distingue un protocole d'un produit commercial.",
    indicators: [
      "Spécification publique téléchargeable sans authentification",
      "Licence permissive (Apache 2.0, MIT, CC-BY, ou équivalent)",
      "Gouvernance multi-stakeholders (pas mono-éditeur)",
      "Processus public de soumission de pull requests / RFC",
      "Absence de royalties ou de redevances obligatoires",
    ],
  },
  {
    key: 'adop',
    label: 'Adoption',
    weight: 15,
    rationale: "Un protocole sans adoption est une bibliographie technique. Sans masse critique d'implémentations, il ne devient jamais standard de facto.",
    indicators: [
      "Nombre d'implémentations recensées (commerciales et open-source)",
      "Présence dans les catalogues d'intégration majeurs (cloud providers, SaaS)",
      "Taille de l'écosystème SDK (langages couverts)",
      "Mentions dans les rapports analystes (Gartner, Forrester, IDC)",
      "Volume d'engagement développeur (étoiles GitHub, issues, contributions)",
    ],
  },
  {
    key: 'mat',
    label: 'Maturité technique',
    weight: 10,
    rationale: "Un protocole en v0.x avec des breaking changes mensuels n'est pas prêt pour la production. La stabilité technique est un préalable, pas une finalité — d'où le poids le plus faible.",
    indicators: [
      "Stabilité de l'API (politique de versioning, breaking changes)",
      "Qualité de la documentation officielle",
      "Existence de SDK officiels dans 3+ langages",
      "Présence d'environnement de test / sandbox",
      "Historique d'incidents et de patches de sécurité",
    ],
  },
]

const H2: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 28,
  fontWeight: 700,
  letterSpacing: '-0.02em',
  marginTop: 56,
  marginBottom: 20,
  color: 'var(--white)',
  lineHeight: 1.2,
}

const H3: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 20,
  fontWeight: 700,
  marginTop: 32,
  marginBottom: 14,
  color: 'var(--white)',
  letterSpacing: '-0.01em',
}

export default function MethodologiePage() {
  const url = 'https://lecommerceagentique.fr/methodologie'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: 'Méthodologie du classement LCA des protocoles a-commerce',
    description: "5 critères pondérés, sources publiques, mise à jour mensuelle. Comment Le Commerce Agentique évalue les 8 protocoles a-commerce.",
    inLanguage: 'fr-FR',
    url,
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Organization',
      name: 'Rédaction LCA',
      url: 'https://lecommerceagentique.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Le Commerce Agentique — édité par ACF®',
      url: 'https://lecommerceagentique.fr',
    },
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
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
          <Link href="/#classement" className="badge" style={{ padding: '7px 14px' }}>← Retour au classement</Link>
        </div>
      </header>

      {/* En-tête article */}
      <section style={{ padding: '64px 0 24px' }}>
        <div className="container-narrow">
          <span className="eyebrow">Méthodologie</span>
          <h1 className="display-2" style={{ marginBottom: 24, lineHeight: 1.1 }}>
            Comment nous classons<br />
            <span className="gradient-gold">les 8 protocoles.</span>
          </h1>
          <p className="lead" style={{ marginBottom: 32, maxWidth: 740 }}>
            5 critères pondérés, sources publiques, mise à jour mensuelle. Aucun acteur évalué ne finance le classement. ACF®, éditeur de ce site, est exclu pour préserver l'indépendance éditoriale.
          </p>
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <span className="chip-gold">5 critères</span>
            <span className="chip">Mise à jour mensuelle</span>
            <span className="chip">Sources publiques</span>
          </div>
        </div>
      </section>

      {/* Corps */}
      <article style={{ padding: '0 0 80px' }}>
        <div className="container-narrow" style={{ fontSize: 16, color: 'var(--gray-1)', lineHeight: 1.75 }}>

          <h2 style={H2}>Pourquoi un classement ?</h2>
          <p style={{ marginBottom: 20 }}>
            En 18 mois, sept protocoles concurrents ont été publiés pour structurer le commerce agentique. Aucun ne s'impose encore. Les décideurs — DSI, RJ, DPO, directions achats — doivent pourtant arbitrer dès aujourd'hui sur lequel intégrer, lequel suivre, lequel ignorer.
          </p>
          <p style={{ marginBottom: 20 }}>
            Ce classement vise à fournir une grille de lecture <strong style={{ color: 'var(--white)' }}>explicite, sourcée, contestable</strong> — pas une vérité absolue. Chaque score est la projection d'un jugement éditorial sur des indicateurs publics. Vous pouvez reproduire le calcul.
          </p>

          <h2 style={H2}>Score composite sur 100</h2>
          <p style={{ marginBottom: 20 }}>
            Chaque protocole reçoit une note de 0 à 100 sur chacun des 5 critères. Le score global est la moyenne pondérée :
          </p>
          <pre style={{
            background: 'var(--navy-2)',
            border: '1px solid var(--border)',
            padding: 20,
            borderRadius: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: 'var(--gray-1)',
            overflow: 'auto',
            marginBottom: 32,
            lineHeight: 1.6,
          }}>{`Score = (Gouvernance × 0.30)
      + (Conformité EU × 0.25)
      + (Ouverture × 0.20)
      + (Adoption × 0.15)
      + (Maturité technique × 0.10)`}</pre>

          <h2 style={H2}>Les 5 critères en détail</h2>
          <p style={{ marginBottom: 32 }}>
            Le poids accordé à chaque critère reflète <strong style={{ color: 'var(--white)' }}>l'urgence réglementaire et opérationnelle</strong> de 2026. Il sera révisé chaque année pour intégrer les nouveaux textes (EU AI Act phases successives, Cyber Resilience Act, etc.).
          </p>

          {CRITERIA.map((c) => (
            <div key={c.key} className="glow-card" style={{ padding: 28, marginBottom: 24, background: 'var(--navy-2)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 14 }}>
                <h3 style={{ ...H3, marginTop: 0, marginBottom: 0 }}>{c.label}</h3>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.04em' }}>
                  {c.weight}% du score
                </span>
              </div>
              <p style={{ fontSize: 15, color: 'var(--gray-1)', lineHeight: 1.65, marginBottom: 18, fontStyle: 'italic' }}>
                {c.rationale}
              </p>
              <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: '0.1em', fontWeight: 700, marginBottom: 10, textTransform: 'uppercase' }}>
                Indicateurs observés
              </div>
              <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0, display: 'grid', gap: 8 }}>
                {c.indicators.map((ind) => (
                  <li key={ind} style={{ fontSize: 14, color: 'var(--gray-1)', lineHeight: 1.55, paddingLeft: 22, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--gold)' }}>→</span>
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h2 style={H2}>Sources & vérification</h2>
          <p style={{ marginBottom: 12 }}>
            Toutes les évaluations sont fondées sur des éléments publics, citables et vérifiables. Aucun accès privilégié, aucun NDA, aucun briefing privé :
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 24, marginTop: 8 }}>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Spécifications officielles</strong> publiées par les éditeurs (PDF, GitHub, sites de référence)</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Code source des SDK</strong> lorsque publié sous licence libre</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Rapports analystes</strong> Gartner, Forrester, IDC (résumés publics et briefings ouverts)</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Textes juridiques</strong> EU AI Act, RGPD, eIDAS, ANSSI, CNIL</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Communications officielles</strong> des éditeurs (annonces, blogs, conférences)</li>
          </ul>

          <h2 style={H2}>Fréquence de mise à jour</h2>
          <p style={{ marginBottom: 20 }}>
            Le classement est <strong style={{ color: 'var(--white)' }}>recalculé mensuellement</strong>. Chaque nouvelle version d'un protocole, chaque jurisprudence majeure, chaque rapport analyste pertinent déclenche une révision du score correspondant. L'historique des révisions est conservé pour audit.
          </p>

          <h2 style={H2}>Gestion des conflits d'intérêt</h2>
          <p style={{ marginBottom: 16 }}>
            Le Commerce Agentique est édité par <strong style={{ color: 'var(--white)' }}>ACF® (Agentic Commerce Framework®)</strong>, qui porte également un standard a-commerce. <strong style={{ color: 'var(--white)' }}>Pour préserver l'indépendance éditoriale</strong> :
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 24, marginTop: 8 }}>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}>ACF® <strong style={{ color: 'var(--white)' }}>n'apparaît pas</strong> dans le classement des 8 protocoles.</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}>Aucun acteur évalué ne finance la rédaction ni n'a de droit de regard préalable sur les scores.</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}>Toute mention d'ACF® dans les articles est <strong style={{ color: 'var(--white)' }}>signalée explicitement</strong> avec mention « édité par ACF® ».</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}>Les contestations de score peuvent être adressées à <a href="mailto:contact@acfstandard.com" style={{ color: 'var(--gold)' }}>contact@acfstandard.com</a> ; les réponses publiques sont publiées dans la rubrique correctifs.</li>
          </ul>

          <h2 style={H2}>Limites assumées</h2>
          <p style={{ marginBottom: 12 }}>
            Aucune méthodologie n'est neutre. Voici les biais que nous reconnaissons :
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 24, marginTop: 8 }}>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Biais européen</strong> : la pondération Conformité EU (25%) défavorise mécaniquement les protocoles US qui n'ont pas encore documenté leur alignement AI Act.</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Biais Open Source</strong> : la pondération Ouverture (20%) défavorise les protocoles propriétaires, même techniquement supérieurs.</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Biais documentaire</strong> : un protocole bien documenté gagne sur un protocole mal documenté mais techniquement équivalent.</li>
            <li style={{ marginBottom: 10, lineHeight: 1.7 }}><strong style={{ color: 'var(--white)' }}>Biais de récence</strong> : un protocole publié il y a moins de 6 mois est mécaniquement noté plus bas sur Adoption et Maturité.</li>
          </ul>

          <h2 style={H2}>Contestation et corrections</h2>
          <p style={{ marginBottom: 20 }}>
            Tout éditeur de protocole, intégrateur, chercheur ou utilisateur professionnel peut contester un score en envoyant un argumentaire à <a href="mailto:contact@acfstandard.com" style={{ color: 'var(--gold)' }}>contact@acfstandard.com</a>. La réponse est publique dans un délai de 30 jours. Les corrections substantielles sont signalées en haut du classement avec date et nature du correctif.
          </p>

          {/* Retour classement */}
          <div className="glow-card" style={{ padding: 32, marginTop: 56, background: 'linear-gradient(135deg, var(--navy-3) 0%, var(--navy-2) 100%)', borderColor: 'var(--gold-dim)', textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 12, textTransform: 'uppercase' }}>Voir le classement</div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Le Top 8 des protocoles a-commerce</h3>
            <p style={{ fontSize: 14, color: 'var(--gray-1)', marginBottom: 20 }}>Maintenant que vous savez comment ils sont notés, regardez où ils tombent.</p>
            <Link href="/#classement" className="btn-gold">Voir le classement →</Link>
          </div>
        </div>
      </article>

      {/* Footer */}
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
