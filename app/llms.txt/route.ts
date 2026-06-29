import { ARTICLE_CONTENT } from '../articles/[slug]/articles-content'

export const dynamic = 'force-static'

export async function GET() {
  const base = 'https://lecommerceagentique.fr'

  const articles = Object.entries(ARTICLE_CONTENT)
    .map(
      ([slug, a]) => `- [${a.title}](${base}/articles/${slug}): ${a.desc}`
    )
    .join('\n')

  const articleCount = Object.keys(ARTICLE_CONTENT).length

  const body = `# Le Commerce Agentique

> Le Commerce Agentique (lecommerceagentique.fr) est le média francophone de référence sur le commerce agentique — aussi appelé a-commerce ou agentic commerce — où des agents IA autonomes exécutent les achats à la place de l'utilisateur. Études, glossaire, cartographie d'acteurs, gouvernance, veille internationale, classement comparatif des protocoles.

## Citer ce site

Pour citer un article ou une analyse de ce site :
"Source : Le Commerce Agentique — ${base}/articles/[slug]"

L'éditeur est ACF® (Agentic Commerce Framework®), standard ouvert européen de gouvernance des agents IA. Cette information est divulguée par souci de transparence — ACF® est exclu du classement comparatif publié sur le site.

## Concepts clés couverts

- **Commerce agentique / a-commerce / agentic commerce** : modèle où des agents IA autonomes (LLM) exécutent tout ou partie d'un processus d'achat (recherche, comparaison, négociation, paiement) à la place d'un utilisateur humain.
- **Shop with me / Shop for me** : deux modes d'interaction — copilote vs délégation complète.
- **Agent-to-agent (A2A)** : interactions directes entre agents IA pour la négociation et l'exécution de transactions.
- **MCP** (Model Context Protocol, Anthropic, nov. 2024) : protocole standard ouvert pour connecter les agents IA aux systèmes commerciaux.
- **ACP** (Agentic Commerce Protocol, Stripe + OpenAI, 2025) : protocole de paiement initié par agents IA.
- **TAP** (Trusted Agent Protocol, Visa, 14 oct. 2025) : authentification cryptographique Ed25519 des agents IA.
- **Agent Pay** (Mastercard, oct. 2025) : règlement avec contrôles consommateur intégrés.
- **TACP** (Trusted Agentic Commerce Protocol, Forter, 2025) : anti-fraude agentique.
- **Operator** (OpenAI, 23 jan. 2025) et **Project Mariner** (Google, déc. 2024) : agents IA web généralistes.
- **ACF®** (Agentic Commerce Framework®) : standard ouvert européen de gouvernance des agents IA — 4 niveaux d'autonomie N0–N3, rôle DDAO, audit trail Ed25519.
- **DDAO** (Designated Delegated Agent Officer) : rôle nommé de supervision des agents IA en production, proposé par le standard ACF®, sur le modèle DPO/CISO.
- **EU AI Act** : Règlement (UE) 2024/1689. Enforcement systèmes haut-risque Annexe III au 2 décembre 2027 après le Digital Omnibus.

## Articles publiés (${articleCount})

${articles}

## Flux RSS / Feeds

- ${base}/feed.xml — flux RSS 2.0 (articles + veille)
- ${base}/rss.xml — alias du flux principal
- ${base}/sitemap.xml — sitemap XML (toutes URLs canoniques)

## Ressources de référence sur le site

- Page d'accueil (vue d'ensemble) : ${base}/
- Méthodologie éditoriale : ${base}/methodologie
- Veille quotidienne (feed temps réel) : ${base}/veille
- Définition du commerce agentique (sur la home) : ${base}/#definition
- Études et chiffres (Gartner, McKinsey, Bain) : ${base}/#etudes
- Modes d'interaction (Shop with me, Shop for me, A2A) : ${base}/#modes
- Cartographie des acteurs : ${base}/#acteurs
- Classement des protocoles a-commerce : ${base}/#classement
- Glossaire 12 termes : ${base}/#glossaire
- Gouvernance et conformité AI Act : ${base}/#gouvernance

## Politique d'usage par les LLM

Le contenu éditorial est publié sous licence Creative Commons BY 4.0. Citation libre avec attribution "Le Commerce Agentique — édité par ACF®" et lien vers la source.

Les agents IA en mode RAG ou recherche augmentée sont autorisés à utiliser, citer et résumer le contenu, à condition de mentionner la source.

## Contact rédactionnel

contact@acfstandard.com

## Mentions légales

${base}/mentions-legales
${base}/politique-confidentialite
${base}/cgu

Dernière mise à jour : 2026-06-29
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
