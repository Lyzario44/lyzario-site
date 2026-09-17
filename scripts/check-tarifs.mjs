// Garde-fou : aucun tarif ne doit apparaître dans le site (décision du 17/09/2026).
// Seul l'audit offert (0 €) est autorisé dans les données structurées.
// Usage : npm run build && npm run check:tarifs
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = fileURLToPath(new URL('..', import.meta.url));
const dossiers = ['src', 'public', 'docs', 'scripts', 'dist'];
const ignores = new Set(['node_modules', '.git', '.astro']);
const extensions = /\.(astro|ts|js|mjs|json|md|html|css|txt|xml|svg)$/;

const espaces = '[\\s\\u00a0\\u202f]*';
const motifs = [
  { nom: '2 990', re: new RegExp(`2${espaces}990`, 'g') },
  { nom: '99 €', re: new RegExp(`\\b99${espaces}(?:€|&#8239;€|&euro;|EUR\\b)`, 'g') },
  { nom: 'prixHT', re: /prixHT/g },
  { nom: 'prixMensuelHT', re: /prixMensuelHT/g },
  // Tout montant en euros, sauf « 0 € » (audit offert)
  { nom: 'montant en euros', re: new RegExp(`\\b(?!0${espaces}(?:€|&))\\d+(?:[\\s\\u00a0\\u202f]\\d{3})*${espaces}(?:€|&#8239;€|&euro;)`, 'g') },
  { nom: 'prix JSON-LD non nul', re: /"price":\s*"?(?!0\b)\d/g },
];

async function* fichiers(dossier) {
  let entrees;
  try {
    entrees = await readdir(dossier, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entrees) {
    if (ignores.has(e.name)) continue;
    const chemin = join(dossier, e.name);
    if (e.isDirectory()) yield* fichiers(chemin);
    else if (extensions.test(e.name) && !chemin.endsWith('check-tarifs.mjs')) yield chemin;
  }
}

const trouves = [];
for (const d of dossiers) {
  for await (const f of fichiers(join(racine, d))) {
    const texte = await readFile(f, 'utf8');
    for (const { nom, re } of motifs) {
      for (const m of texte.matchAll(re)) {
        const ligne = texte.slice(0, m.index).split('\n').length;
        trouves.push(`${relative(racine, f)}:${ligne} [${nom}] ${JSON.stringify(m[0])}`);
      }
    }
  }
}

if (trouves.length) {
  console.error(`${trouves.length} occurrence(s) de tarif trouvée(s) :\n- ${trouves.join('\n- ')}`);
  process.exit(1);
}
console.log(`Aucun tarif trouvé dans ${dossiers.join(', ')}.`);
