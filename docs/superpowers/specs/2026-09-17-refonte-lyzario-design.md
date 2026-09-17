# Refonte lyzario.fr : décisions validées

Date : 2026-09-17. Sources de vérité : `C:\Users\verto\lyzario-brief\Charte Lyzario.pdf` et `Offre Lyzario.pdf`.

## Offre (référence unique)
- Aucun tarif n'est publié sur le site (décision du 17/09/2026). Contrôle : `npm run check:tarifs`.
- Porte d'entrée : audit offert, sans engagement, réservé aux entreprises dans le périmètre de Lyzario. Il comprend un échange de 30 minutes, l'identification des points de friction, une proposition synthétique de structuration et une première maquette d'un écran clé à vos couleurs (visuelle, non fonctionnelle).
- Parcours : audit offert → proposition de structuration et première maquette → validation du besoin et du périmètre → proposition commerciale personnalisée → réalisation → 30 jours de stabilisation → maintenance facultative.
- Accompagnement : analyse de l'organisation, analyse des process et restructuration, construction de l'outil, automatisations nécessaires, mise en production, tests et ajustements, formation de l'équipe, 30 jours de stabilisation après la mise en ligne.
- Maintenance facultative, sans engagement. Évolutions importantes sur devis séparé.
- Hébergement au nom du client.
- Preuve autorisée : « +25 projets menés avec des entreprises ».
- Seule offre balisée en JSON-LD : l'audit offert (0 €).

## Architecture (option B)
- `/` accueil, 13 sections : hero, problème, approche et méthode, outils actuels, ce qui change, équipes et dirigeant, réalisations, audit offert, accompagnement (avec propriété), témoignages, Jérôme, FAQ, appel final.
- `/realisations/<slug>` : collection de contenu, `draft: true` non publié ; index créé à partir de 2 cas.
- `/mentions-legales`, `/cgv`, `/confidentialite`, 404.
- Sections courtes, navigation fluide.

## Stack
Astro (sortie statique), Vercel. Polices via l'API Fonts d'Astro (fontsource). Pas de framework JS client.

## Système visuel (charte)
- Couleurs : nuit 950 `#0B1224`, 900 `#0F172A`, 800 `#141D33`, blanc cassé `#F8FAFC`, turquoise 500 `#2DD4BF` (400 `#5EEAD4` survol, 600 `#14B8A6` pressé).
- Écart accessibilité validé, fond clair uniquement : italique display `#0D9488`, libellés/liens/focus `#0F766E`.
- Polices : Instrument Serif 400 (titres, italique turquoise sur un mot-clé), DM Sans 400/500/600 (texte, jamais de titres en gras), JetBrains Mono (données).
- Motif « au carré » : grille 40 px à 5 %, carrés épars vers grille 3×3, cellule pleine turquoise en bas à droite. Seule illustration.
- Mouvement : 220 ms `cubic-bezier(.2,.7,.2,1)`, fondu + 8 px. Une seule animation automatique (motif du hero). `prefers-reduced-motion` respecté.
- Un seul CTA turquoise par écran. Logo : monogramme LZ redessiné en SVG à l'identique.

## Écriture
Ton de l'offre PDF : simple, direct, humain, concret. « Je » / « vous ». Typographie française. Pas de jargon (IA, SaaS, API, workflow) sauf nécessité. Aucun chiffre, résultat, témoignage, délai ou cas inventé. Emplacements prévus pour : photo de Jérôme, captures réelles, réalisations anonymisées, témoignages validés, cas clients.

## SEO
Title/description uniques, Hn propres, canonicals, Open Graph, sitemap, robots.txt, JSON-LD (ProfessionalService, Person, WebSite, Service avec l'audit offert, FAQPage), images optimisées, SEO local Nantes / Sainte-Pazanne.
