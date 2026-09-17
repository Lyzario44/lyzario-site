# Refonte Lyzario, phase 1 : socle, header, hero, sections 2 et 3

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Poser le socle Astro et livrer une première prévisualisation (header, hero, problème, méthode) pour valider direction artistique, ton et mobile.

**Architecture:** Site statique Astro. Tokens CSS issus de la charte dans `src/styles`, composants par responsabilité dans `src/components`, sections de l'accueil dans `src/components/home`, données factuelles centralisées dans `src/data/site.ts`.

**Tech Stack:** Astro 7, @astrojs/sitemap, API Fonts (fontsource), Vercel.

**Spec:** `docs/superpowers/specs/2026-09-17-refonte-lyzario-design.md`

## Global Constraints
- Aucun contenu inventé (chiffres, délais, résultats, témoignages, cas).
- Un seul CTA turquoise visible par écran.
- Contraste AA : sur fond clair, accent texte `#0F766E`, italique display `#0D9488`.
- Texte courant ≥ 16 px, cibles tactiles ≥ 44 px, focus visible, `prefers-reduced-motion`.
- Typographie française (espace fine insécable avant ? : ; ! et dans « »).

---

### Task 1: Socle projet
**Files:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `vercel.json`, `.gitignore`, `public/robots.txt`, `public/favicon.svg`, `src/data/site.ts`
- [ ] Installer astro et @astrojs/sitemap, configurer `site`, `trailingSlash: 'never'`, `build.format: 'file'`, polices.
- [ ] `vercel.json` : framework astro, `cleanUrls`, cache immuable `/_astro/*`.
- [ ] Vérifier : `npm run build` passe, `dist/sitemap-index.xml` existe.

### Task 2: Tokens et styles globaux
**Files:** `src/styles/tokens.css`, `src/styles/global.css`
- [ ] Couleurs, thèmes `.theme-dark` / `.theme-light`, échelle typo, espacements, rayons, mouvement, grille de fond, boutons, libellés, puces carrées.
- [ ] Vérifier contrastes clés (voir spec).

### Task 3: Layout SEO, logo, header, footer
**Files:** `src/layouts/BaseLayout.astro`, `src/components/Logo.astro`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/components/SeoJsonLd.astro`
- [ ] Head complet (title, description, canonical, OG, Twitter, theme-color, favicon, JSON-LD), lien d'évitement.
- [ ] Logo SVG à l'identique (géométrie mesurée : L `M200 200H272V528H600V600H200Z`, diagonale `M516 272H600L444 528H360Z`, barre turquoise `x360 y200 240×72`).
- [ ] Header fixe verre léger, menu mobile accessible (aria-expanded, Échap).

### Task 4: Hero, problème, méthode
**Files:** `src/components/SquareMotif.astro`, `src/components/home/Hero.astro`, `src/components/home/Probleme.astro`, `src/components/home/Methode.astro`, `src/pages/index.astro`
- [ ] Textes tirés de l'offre PDF.
- [ ] Vérifier à 375, 768, 1440 px (captures), clavier, reduced motion.
- [ ] Commit, push de `refonte-2026` uniquement.
