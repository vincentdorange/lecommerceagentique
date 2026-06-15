-- ──────────────────────────────────────────────────────────────────
-- Le Commerce Agentique — Retrait du backlog initial fabriqué
-- Migration 0004 · 2026-06-15
-- ──────────────────────────────────────────────────────────────────
-- CONTEXTE — incident d'intégrité éditoriale
--
-- La migration 0003_news_backlog_initial.sql (2026-06-10) a injecté
-- 30 entrées de veille en table public.news_ticker. Ces 30 entrées
-- ont été *fabriquées* — titres, snippets, dates, attributions à des
-- sources externes (cnil.fr, mastercard.com, stripe.com/blog, visa,
-- bain.com, etc.) — sans aucune source primaire vérifiable derrière.
--
-- Plusieurs entrées attribuent en outre des positions à des
-- autorités publiques (CNIL, Commission européenne) qui n'ont
-- pas été émises. Ce sont des fausses attributions.
--
-- Cette migration les retire toutes par soft-delete (active=false).
-- Aucune donnée n'est physiquement supprimée — l'historique reste
-- disponible pour audit interne, mais aucune entrée n'apparaîtra
-- plus sur https://lecommerceagentique.fr/veille ni sur la home.
--
-- À EXÉCUTER : Supabase Dashboard → SQL Editor → New query →
-- coller tout ce fichier → Run.
-- ──────────────────────────────────────────────────────────────────

-- ── Étape 1 — vérification du périmètre avant action ──
-- Doit retourner 30. Si autre nombre, arrête et alerte.
SELECT count(*) AS total_to_deactivate
  FROM public.news_ticker
 WHERE created_at >= '2026-06-10'
   AND created_at <  '2026-06-11'
   AND active = true;

-- ── Étape 2 — soft-delete des 30 entrées fabriquées ──
-- Note : pas de updated_at sur news_ticker (cf. 0002 schema).
-- Pour tracer la désactivation, vérifier created_at + active=false.
UPDATE public.news_ticker
   SET active = false
 WHERE created_at >= '2026-06-10'
   AND created_at <  '2026-06-11'
   AND active = true;

-- ── Étape 3 — vérification post-action ──
-- active=true doit valoir 0 (aucune entrée active).
-- active=false doit valoir 30 (les 30 retirées sont marquées).
SELECT active, count(*) AS n
  FROM public.news_ticker
 GROUP BY active
 ORDER BY active;

-- ── Étape 4 (optionnelle) — purge définitive ──
-- Commentée par défaut. Décommenter UNIQUEMENT si la décision
-- éditoriale est de supprimer physiquement les fausses entrées
-- plutôt que de garder une trace de soft-delete.
--
-- DELETE FROM public.news_ticker
--  WHERE created_at >= '2026-06-10'
--    AND created_at <  '2026-06-11'
--    AND active = false;
