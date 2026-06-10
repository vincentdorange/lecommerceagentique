# Appliquer les migrations news_ticker (5 min)

Le code est déjà déployé sur https://lecommerceagentique.fr. Reste à exécuter 2 SQL dans Supabase pour activer le fil de veille.

## 1. Crée la table

Ouvre https://supabase.com/dashboard → ton projet `lecommerceagentique` → **SQL Editor** → `New query` → colle :

```sql
-- Migration 0002 : table news_ticker
-- (cf. supabase/migrations/0002_news_ticker.sql)
```

→ Copie tout le contenu du fichier `supabase/migrations/0002_news_ticker.sql` (84 lignes)
→ Clique **Run** → tu dois voir « Success. No rows returned. »

## 2. Charge le backlog initial (30 entrées sur 30 jours)

`New query` → colle tout le contenu de `supabase/migrations/0003_news_backlog_initial.sql` (~140 lignes)
→ Clique **Run** → tu dois voir « INSERT 0 30 »

## 3. Vérifie

- Va sur https://lecommerceagentique.fr → tu dois voir la section **🔴 NEWS** sous la citation Wikipedia, avec 5 entrées datées « il y a 1 h », « il y a 4 h », etc.
- Va sur https://lecommerceagentique.fr/veille → tu vois 5 entrées (les 25 autres apparaîtront jour par jour à 8h).

## 4. Pour ajouter de nouvelles entrées plus tard

### Option A — Via l'API admin (recommandé)
```bash
curl -X POST https://lecommerceagentique.fr/api/admin/news \
  -H "Authorization: Bearer 41e7c02c9e2cc576a07433485c5dfa9e2b4fdd4197b76d6242fc3a3ad1a74ba6" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Visa publie son rapport TAP Q2 — 89 marchands intégrés",
    "snippet": "Le rapport semestriel détaille la liste des intégrateurs et les volumes cumulés...",
    "category": "Adoption",
    "source_url": "https://corporate.visa.com",
    "source_name": "corporate.visa.com",
    "published_at": "2026-07-15T08:00:00Z",
    "display_after": "2026-07-15T08:00:00Z"
  }'
```

### Option B — Directement dans Supabase Dashboard
Table Editor → `news_ticker` → **Insert row** → remplis les champs.

### Option C — Dashboard admin web (V1.5 à venir)
Une page `/admin/news` viendra plus tard pour gérer le backlog depuis le navigateur sans curl.

## 5. Pour désactiver une entrée

```bash
curl -X DELETE "https://lecommerceagentique.fr/api/admin/news?id=UUID_DE_LA_NEWS" \
  -H "Authorization: Bearer $ADMIN_SECRET"
```

(soft delete : la ligne reste en DB avec `active=false`)
