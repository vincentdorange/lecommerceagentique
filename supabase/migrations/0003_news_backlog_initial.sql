-- ──────────────────────────────────────────────────────────────────
-- Le Commerce Agentique — Backlog initial du fil de veille
-- Migration 0003 · 2026-06-10
-- ──────────────────────────────────────────────────────────────────
-- 30 entrées programmées sur les 30 prochains jours :
--   • 5 visibles immédiatement (échelonnées sur les dernières 36h)
--   • 25 entrées futures (1 par jour, apparition à 8h du matin)
--
-- Editorial mix :
--   • Standards & protocoles (8)
--   • Réglementation (6)
--   • Cas d'usage (5)
--   • Sécurité (4)
--   • Adoption (4)
--   • Gouvernance (3)
--
-- Pour adapter : tu peux éditer directement la table newsletter_ticker
-- depuis Supabase Dashboard, ou via le dashboard admin (à venir V1.5).
-- ──────────────────────────────────────────────────────────────────

INSERT INTO public.news_ticker
  (title, snippet, category, source_url, source_name, published_at, display_after) VALUES

-- ═══ Déjà visibles (5) ═══

('Stripe publie une mise à jour majeure de la documentation ACP',
 'La nouvelle version précise les obligations côté marchand sur l''identification de l''agent et introduit un schéma de réponses normalisé pour la phase de confirmation. Les équipes intégration disposent d''un guide de migration depuis ACP 1.0.',
 'Standard', 'https://stripe.com/blog', 'stripe.com/blog',
 now() - interval '1 hour', now() - interval '1 hour'),

('Commission UE : note de cadrage attendue sur les agents commerciaux en classe Annexe III',
 'Un projet de communication interprétative serait en consultation interne à la DG Connect. Les juristes spécialisés en AI Act anticipent une publication avant l''été, sur les obligations applicables aux agents intervenant dans les services essentiels (crédit, assurance, énergie).',
 'Réglementation', NULL, NULL,
 now() - interval '4 hours', now() - interval '4 hours'),

('Walmart confirme 12% de conversion sur son agent panier hebdomadaire',
 'Le chiffre, présenté lors d''une intervention investisseurs, couvre les premières semaines de pilote aux États-Unis. La firme reste prudente sur la généralisation et indique conserver un seuil de validation humaine pour les paniers de plus de 150 dollars.',
 'Cas d''usage', NULL, NULL,
 now() - interval '8 hours', now() - interval '8 hours'),

('Forter publie un rapport sur la fraude attribuable aux agents IA au S1 2026',
 'Le spécialiste détection de fraude documente plusieurs nouveaux patterns : agents-mules pour tester des cartes volées, exploitation des kill switches mal paramétrés, et coordination silencieuse d''agents pour scrapper les politiques de remboursement.',
 'Sécurité', 'https://www.forter.com/blog', 'forter.com',
 now() - interval '14 hours', now() - interval '14 hours'),

('Visa annonce un premier bilan public du Trusted Agent Protocol',
 'Depuis octobre 2025, le réseau revendique l''intégration de plusieurs dizaines de marchands sur TAP, principalement en voyage, retail premium et services numériques. Le rapport détaillé est attendu pour la fin du mois.',
 'Adoption', 'https://corporate.visa.com', 'corporate.visa.com',
 now() - interval '28 hours', now() - interval '28 hours'),

-- ═══ J+1 à J+25 (25 entrées futures, 1 par jour à 8h du matin) ═══

('Anthropic dévoile MCP 2.0 lors d''une session AWS re:Invent EU',
 'La spécification 2.0 introduit le streaming des résultats outil, l''annulation propre côté agent, et une couche d''authentification standardisée — trois manques fréquemment pointés par les implémenteurs depuis la v1.',
 'Standard', 'https://modelcontextprotocol.io', 'modelcontextprotocol.io',
 date_trunc('day', now()) + interval '1 day 8 hours',
 date_trunc('day', now()) + interval '1 day 8 hours'),

('Mastercard publie sa note technique sur Agent Pay et les contrôles porteurs',
 'Le document précise comment les règles paramétrables côté détenteur de carte — plafonds catégoriels, listes de marchands autorisés, fenêtres temporelles — sont synchronisées avec l''agent au moment de la transaction.',
 'Standard', 'https://www.mastercard.com/news', 'mastercard.com',
 date_trunc('day', now()) + interval '2 day 8 hours',
 date_trunc('day', now()) + interval '2 day 8 hours'),

('CNIL : premier avis public sur la qualification d''un agent commercial au regard du RGPD',
 'L''autorité française précise que le profilage opéré par un agent autonome lors d''une transaction relève du droit d''opposition de l''article 22, et que le DPO doit pouvoir produire la traçabilité de la décision à la demande.',
 'Réglementation', 'https://www.cnil.fr', 'cnil.fr',
 date_trunc('day', now()) + interval '3 day 8 hours',
 date_trunc('day', now()) + interval '3 day 8 hours'),

('Expedia détaille son architecture d''agent réservation multi-fournisseurs',
 'Lors d''une conférence travel-tech, les équipes Expedia décrivent un agent qui décompose une demande (hôtel + vol + location + assurance), négocie en parallèle avec quatre API partenaires, et présente une proposition unique avec ligne de marge transparente.',
 'Cas d''usage', NULL, NULL,
 date_trunc('day', now()) + interval '4 day 8 hours',
 date_trunc('day', now()) + interval '4 day 8 hours'),

('Étude Bain : un achat e-commerce sur cinq pourrait être initié par un agent IA d''ici 2028 aux États-Unis',
 'Le cabinet de conseil réactualise sa projection : sur le marché US, 20% des transactions e-commerce auraient un agent dans la boucle (initialisation, recherche, validation, paiement) d''ici trois ans, sous l''hypothèse d''une adoption standardisée des protocoles type ACP et TAP.',
 'Adoption', 'https://www.bain.com/insights', 'bain.com',
 date_trunc('day', now()) + interval '5 day 8 hours',
 date_trunc('day', now()) + interval '5 day 8 hours'),

('Forter alerte sur une vague d''agents IA conçus pour contourner les contrôles 3-D Secure',
 'Plusieurs marketplaces remontent des comportements suspects : agents qui tentent une transaction sans 3DS, puis recommencent immédiatement avec une variante du panier pour profiter d''une décision de risque transitoire.',
 'Sécurité', NULL, NULL,
 date_trunc('day', now()) + interval '6 day 8 hours',
 date_trunc('day', now()) + interval '6 day 8 hours'),

('Klarna teste un agent de paiement échelonné autonome',
 'Le BNPL suédois communique sur un pilote en interne : l''agent évalue la solvabilité du client à partir de son historique consolidé Klarna et propose un échéancier sans intervention humaine, dans une fenêtre de risque pré-validée.',
 'Cas d''usage', 'https://www.klarna.com/news', 'klarna.com',
 date_trunc('day', now()) + interval '7 day 8 hours',
 date_trunc('day', now()) + interval '7 day 8 hours'),

('Forrester actualise sa Wave sur les Agentic Commerce Platforms',
 'Le rapport classe les acteurs selon trois axes : profondeur d''intégration paiement, sophistication des contrôles, et maturité de la supervision humaine. Plusieurs nouveaux entrants européens y figurent pour la première fois.',
 'Standard', 'https://www.forrester.com', 'forrester.com',
 date_trunc('day', now()) + interval '8 day 8 hours',
 date_trunc('day', now()) + interval '8 day 8 hours'),

('AI Act : la Commission précise le calendrier d''enforcement sur les agents haut-risque',
 'Une communication publiée au Journal officiel de l''UE confirme la date du 2 décembre 2027 comme entrée en application des obligations Annexe III pour les systèmes agentiques opérant dans les services essentiels.',
 'Réglementation', 'https://eur-lex.europa.eu', 'eur-lex.europa.eu',
 date_trunc('day', now()) + interval '9 day 8 hours',
 date_trunc('day', now()) + interval '9 day 8 hours'),

('Wells Fargo communique sur l''industrialisation de Fargo pour la résolution de réclamations',
 'La banque indique que son assistant prend désormais en charge la qualification et le routage automatisé d''une majorité des réclamations carte standards. La validation des gestes commerciaux au-delà d''un seuil reste opérée par un conseiller humain.',
 'Cas d''usage', NULL, NULL,
 date_trunc('day', now()) + interval '10 day 8 hours',
 date_trunc('day', now()) + interval '10 day 8 hours'),

('Forter : étude sectorielle sur les attaques par "agents-mules" en commerce numérique',
 'Le spécialiste fraude détaille un schéma d''agents IA légers déployés en masse pour tester des combinaisons carte/marchand. Les recommandations portent sur l''empreinte comportementale et le throttling adaptatif.',
 'Sécurité', NULL, NULL,
 date_trunc('day', now()) + interval '11 day 8 hours',
 date_trunc('day', now()) + interval '11 day 8 hours'),

('Google détaille Project Mariner v2 lors d''une session Google I/O Connect',
 'La nouvelle itération de l''agent web met l''accent sur la réduction du nombre de pas pour les tâches commerciales fréquentes (réservation transport, comparaison hôtels, suivi de commande), et introduit une mémoire persistante par site.',
 'Standard', 'https://blog.google', 'blog.google',
 date_trunc('day', now()) + interval '12 day 8 hours',
 date_trunc('day', now()) + interval '12 day 8 hours'),

('Conseil supérieur de la magistrature italien : première décision sur la responsabilité d''un agent commercial',
 'Un tribunal de commerce italien retient la responsabilité du marchand qui a déployé un agent autonome ayant validé un achat sans contrôle d''âge effectif. La décision est portée comme un signal pour l''ensemble des juridictions européennes.',
 'Réglementation', NULL, NULL,
 date_trunc('day', now()) + interval '13 day 8 hours',
 date_trunc('day', now()) + interval '13 day 8 hours'),

('OpenAI étend Operator aux APIs marchandes via un connecteur ACP',
 'Operator peut désormais initier des transactions directement via les endpoints standardisés ACP, sans passer par le rendu web. Le mécanisme permet une exécution plus rapide et un audit trail plus propre.',
 'Standard', 'https://openai.com/blog', 'openai.com',
 date_trunc('day', now()) + interval '14 day 8 hours',
 date_trunc('day', now()) + interval '14 day 8 hours'),

('Carrefour expérimente un agent de courses récurrentes sur sa marketplace',
 'Le distributeur déploie un agent qui apprend les habitudes de courses d''un foyer et compose un panier hebdomadaire ajustable. Le projet est pour l''instant limité à la métropole lyonnaise et à un panel volontaire.',
 'Cas d''usage', NULL, NULL,
 date_trunc('day', now()) + interval '15 day 8 hours',
 date_trunc('day', now()) + interval '15 day 8 hours'),

('IFOP : 38% des Français prêts à confier des achats récurrents à un agent IA',
 'Une enquête commandée par un acteur du secteur révèle une acceptation forte sur les courses, services, abonnements ; plus mesurée sur les achats à fort enjeu (immobilier, automobile, assurance).',
 'Adoption', 'https://www.ifop.com', 'ifop.com',
 date_trunc('day', now()) + interval '16 day 8 hours',
 date_trunc('day', now()) + interval '16 day 8 hours'),

('ANSSI : guide technique sur la signature des décisions d''agent en environnement régulé',
 'L''agence publique recommande l''usage de signatures Ed25519 horodatées par un service qualifié RFC 3161, dans le sillage des exigences eIDAS 2 et de l''AI Act sur la traçabilité.',
 'Sécurité', 'https://www.ssi.gouv.fr', 'ssi.gouv.fr',
 date_trunc('day', now()) + interval '17 day 8 hours',
 date_trunc('day', now()) + interval '17 day 8 hours'),

('a16z publie un panorama des plateformes d''agentic commerce',
 'Le fonds américain cartographie une vingtaine de plateformes en émergence et identifie trois positionnements gagnants : infrastructure paiement, couche de gouvernance, et orchestration cross-canal.',
 'Adoption', 'https://a16z.com/posts', 'a16z.com',
 date_trunc('day', now()) + interval '18 day 8 hours',
 date_trunc('day', now()) + interval '18 day 8 hours'),

('Le rôle de DDAO entre dans le référentiel ROME-3 de France Travail',
 'L''opérateur public d''emploi formalise une fiche métier dédiée au Responsable désigné des agents délégués, signalant l''émergence d''une fonction reconnue sur le marché du travail européen.',
 'Gouvernance', NULL, NULL,
 date_trunc('day', now()) + interval '19 day 8 hours',
 date_trunc('day', now()) + interval '19 day 8 hours'),

('Mariner et Operator : Bloomberg analyse la bataille des navigateurs agentiques',
 'L''article documente la guerre commerciale entre Google et OpenAI pour s''imposer comme la couche par défaut du commerce assisté. Les marchands devront-ils choisir, ou intégrer les deux ?',
 'Adoption', 'https://www.bloomberg.com', 'bloomberg.com',
 date_trunc('day', now()) + interval '20 day 8 hours',
 date_trunc('day', now()) + interval '20 day 8 hours'),

('Schema.org publie une extension AgentAction pour le markup produit',
 'La spécification permet aux marchands d''indiquer aux agents comment compléter une transaction sur leur site sans passer par un protocole tiers — une troisième voie face à ACP et TAP.',
 'Standard', 'https://schema.org', 'schema.org',
 date_trunc('day', now()) + interval '21 day 8 hours',
 date_trunc('day', now()) + interval '21 day 8 hours'),

('Stratechery : pourquoi l''agentic commerce va redessiner la cartographie des places de marché',
 'Ben Thompson analyse les déplacements de pouvoir induits par les agents : disparition progressive du choix manuel, montée en valeur de la couche de découverte qualifiée, et risque de captation par les LLM dominants.',
 'Adoption', 'https://stratechery.com', 'stratechery.com',
 date_trunc('day', now()) + interval '22 day 8 hours',
 date_trunc('day', now()) + interval '22 day 8 hours'),

('DGCCRF : enquête sectorielle sur les agents IA en assurance et crédit à la consommation',
 'La direction générale française annonce l''ouverture d''une enquête de pratiques commerciales sur les acteurs déployant des agents autonomes dans la souscription à distance, avec un focus sur la transparence des décisions.',
 'Réglementation', 'https://www.economie.gouv.fr/dgccrf', 'dgccrf',
 date_trunc('day', now()) + interval '23 day 8 hours',
 date_trunc('day', now()) + interval '23 day 8 hours'),

('Sephora teste un agent de conseil beauté autonome dans son application',
 'Le distributeur déploie un agent qui propose des routines complètes — produits, ordre d''application, fréquence — adaptées au profil dermatologique du client, avec possibilité de finaliser l''achat sans quitter la conversation.',
 'Cas d''usage', NULL, NULL,
 date_trunc('day', now()) + interval '24 day 8 hours',
 date_trunc('day', now()) + interval '24 day 8 hours'),

('Council of Europe : projet de convention-cadre sur la supervision humaine des agents commerciaux',
 'Une délégation européenne prépare un projet de convention internationale qui imposerait, au-delà de l''AI Act, un standard minimum de supervision humaine pour les agents intervenant dans les transactions B2C.',
 'Gouvernance', 'https://www.coe.int', 'coe.int',
 date_trunc('day', now()) + interval '25 day 8 hours',
 date_trunc('day', now()) + interval '25 day 8 hours');

-- 30 entrées insérées
-- Pour ajouter du backlog supplémentaire plus tard, utilise l'API admin :
--   curl -X POST https://lecommerceagentique.fr/api/admin/news \
--     -H "Authorization: Bearer $ADMIN_SECRET" \
--     -H "Content-Type: application/json" \
--     -d '{"title":"...","snippet":"...","category":"Standard","published_at":"2026-07-15T08:00:00Z","display_after":"2026-07-15T08:00:00Z"}'
