import type { Metadata } from 'next'
import LegalLayout from '../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Le Commerce Agentique, édité par Vincent Dorange dans le cadre de ACF®.',
  alternates: { canonical: 'https://lecommerceagentique.fr/mentions-legales' },
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

export default function Page() {
  return (
    <LegalLayout title="Mentions légales" eyebrow="Légal" updatedAt="9 juin 2026">
      <h2 style={H2}>1. Éditeur du site</h2>
      <p>
        Le site <strong>lecommerceagentique.fr</strong> (ci-après « le Site ») est édité par :
      </p>
      <p style={{ marginTop: 12 }}>
        <strong>Vincent Dorange</strong>
        <br />
        Adresse postale : Villa Victoria, 657B chemin de la Rampe, 06220 Vallauris, France
        <br />
        Email : <a href="mailto:contact@acfstandard.com" style={{ color: 'var(--gold)' }}>contact@acfstandard.com</a>
        <br />
        Directeur de la publication : Vincent Dorange
      </p>
      <p style={{ marginTop: 12 }}>
        Le Site est publié dans le cadre de l'écosystème <strong>ACF®</strong> — Agentic Commerce Framework®, standard ouvert européen de gouvernance des agents IA.
      </p>

      <h2 style={H2}>2. Hébergement</h2>
      <p>
        Le Site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
        Les fonctions serverless sont déployées en zone Frankfurt (fra1, Allemagne, Union européenne).
      </p>
      <p style={{ marginTop: 12 }}>
        Le nom de domaine est enregistré chez <strong>Hostinger International Ltd.</strong>, 61 Lordou Vironos Street, 6023 Larnaca, Chypre.
      </p>

      <h2 style={H2}>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu éditorial publié sur le Site (textes, images, mise en page, graphismes, logo) est protégé par le droit d'auteur.
      </p>
      <p style={{ marginTop: 12 }}>
        Sauf mention contraire explicite, le contenu éditorial est mis à disposition sous licence <strong>Creative Commons BY 4.0</strong>. Toute reproduction est autorisée à condition de citer la source : « Le Commerce Agentique — édité par ACF® ».
      </p>
      <p style={{ marginTop: 12 }}>
        Les marques <strong>ACF®</strong>, <strong>Agentic Commerce Framework®</strong> et <strong>Souveraineté Agentique®</strong> sont des marques déposées de Vincent Dorange.
      </p>

      <h2 style={H2}>4. Liens externes</h2>
      <p>
        Le Site peut contenir des liens vers des sites tiers. Le Site n'est pas responsable du contenu, de la disponibilité ou des pratiques de confidentialité des sites tiers.
      </p>

      <h2 style={H2}>5. Limitation de responsabilité</h2>
      <p>
        Les informations publiées sur le Site sont fournies à titre informatif. Elles ne constituent ni un conseil juridique, ni un conseil financier, ni un conseil en investissement. Avant toute décision opérationnelle, le lecteur est invité à consulter un professionnel qualifié.
      </p>
      <p style={{ marginTop: 12 }}>
        Le Site s'efforce d'assurer l'exactitude des informations publiées, sans garantie. Les statistiques et projections citées proviennent de sources tierces dont les méthodologies relèvent de leurs éditeurs respectifs.
      </p>

      <h2 style={H2}>6. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'usage du Site relève de la compétence exclusive des tribunaux français.
      </p>

      <h2 style={H2}>7. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales ou au Site, contactez : <a href="mailto:contact@acfstandard.com" style={{ color: 'var(--gold)' }}>contact@acfstandard.com</a>.
      </p>
    </LegalLayout>
  )
}
