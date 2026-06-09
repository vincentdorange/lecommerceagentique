import type { Metadata } from 'next'
import LegalLayout from '../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation',
  description: 'Conditions générales d\'utilisation du site Le Commerce Agentique.',
  alternates: { canonical: 'https://lecommerceagentique.fr/cgu' },
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
    <LegalLayout title="Conditions d'utilisation" eyebrow="CGU" updatedAt="9 juin 2026">
      <p>
        L'accès et l'utilisation du site <strong>lecommerceagentique.fr</strong> sont soumis aux présentes conditions générales d'utilisation (« CGU »).
        En accédant au Site, vous acceptez les présentes CGU sans réserve.
      </p>

      <h2 style={H2}>1. Objet du Site</h2>
      <p>
        Le Site est un média indépendant dédié au commerce agentique (a-commerce). Il publie des analyses, études, glossaires, cartographies d'acteurs et veille internationale.
        Le contenu publié est à vocation informative et éditoriale uniquement.
      </p>

      <h2 style={H2}>2. Accès au Site</h2>
      <p>
        Le Site est accessible gratuitement, sans création de compte, depuis tout terminal disposant d'un accès à Internet.
        L'Éditeur s'efforce de maintenir le Site disponible 24/7 mais ne garantit pas une disponibilité absolue. Des interruptions ponctuelles peuvent survenir pour maintenance, mises à jour, ou raisons techniques.
      </p>

      <h2 style={H2}>3. Comportement attendu de l'utilisateur</h2>
      <p>L'utilisateur s'engage à utiliser le Site dans le respect des lois en vigueur et de l'ordre public. Sont notamment interdits :</p>
      <ul style={{ paddingLeft: 24, marginTop: 12 }}>
        <li>Toute tentative d'intrusion, d'accès non autorisé ou de perturbation des serveurs du Site</li>
        <li>L'utilisation de robots automatisés, scrapers ou agents IA pour extraire massivement le contenu (sauf usage informatif loyal)</li>
        <li>La diffusion de virus, malwares ou code malveillant</li>
        <li>Toute action visant à dégrader le service offert aux autres utilisateurs</li>
      </ul>

      <h2 style={H2}>4. Propriété intellectuelle</h2>
      <p>
        Le contenu éditorial du Site (textes, articles, analyses, glossaire, classements) est mis à disposition sous licence <strong>Creative Commons BY 4.0</strong>, sauf mention contraire explicite.
        Toute réutilisation est autorisée à condition de citer la source : « Le Commerce Agentique — édité par ACF® ».
      </p>
      <p style={{ marginTop: 12 }}>
        Le code source du Site, son design, et les marques <strong>ACF®</strong>, <strong>Agentic Commerce Framework®</strong> et <strong>Souveraineté Agentique®</strong> demeurent la propriété exclusive de Vincent Dorange et ne peuvent être réutilisés sans autorisation préalable.
      </p>

      <h2 style={H2}>5. Garanties et responsabilités</h2>
      <p>
        Le contenu publié sur le Site est fourni à titre informatif. Il ne constitue ni un conseil juridique, ni un conseil financier, ni une recommandation d'investissement.
        Avant toute décision opérationnelle, le lecteur est invité à consulter un professionnel qualifié.
      </p>
      <p style={{ marginTop: 12 }}>
        L'Éditeur s'efforce de vérifier l'exactitude des informations publiées mais ne saurait être tenu responsable d'erreurs, omissions ou interprétations.
        Les liens vers des ressources tierces sont fournis à titre d'information ; l'Éditeur n'est pas responsable du contenu de ces sites.
      </p>

      <h2 style={H2}>6. Modifications du Site et des CGU</h2>
      <p>
        L'Éditeur se réserve le droit de modifier le Site, son contenu, sa structure ou les présentes CGU à tout moment. La version en vigueur est celle publiée sur cette page.
      </p>

      <h2 style={H2}>7. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux français.
      </p>

      <h2 style={H2}>8. Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU : <a href="mailto:contact@acfstandard.com" style={{ color: 'var(--gold)' }}>contact@acfstandard.com</a>.
      </p>
    </LegalLayout>
  )
}
