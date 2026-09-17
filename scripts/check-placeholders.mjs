// Contrôle avant fusion sur main.
// - Bloquant : tout élément data-bloquant dans le site compilé (contenu indispensable manquant).
// - Informatif : médias, témoignages et études de cas pas encore fournis (masqués proprement sur le site).
// Usage : npm run build && npm run check:placeholders
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = fileURLToPath(new URL('..', import.meta.url));
const dist = join(racine, 'dist');

async function* fichiersHtml(dossier) {
  for (const entree of await readdir(dossier, { withFileTypes: true })) {
    const chemin = join(dossier, entree.name);
    if (entree.isDirectory()) yield* fichiersHtml(chemin);
    else if (entree.name.endsWith('.html')) yield chemin;
  }
}

const bloquants = [];
for await (const fichier of fichiersHtml(dist)) {
  const html = await readFile(fichier, 'utf8');
  for (const m of html.matchAll(/data-(?:bloquant|placeholder)="([^"]+)"/g)) {
    bloquants.push(`${fichier.slice(dist.length + 1)} : ${m[1]}`);
  }
}

const { medias } = JSON.parse(await readFile(join(racine, 'src/data/medias.json'), 'utf8'));
const mediasManquants = medias.filter((m) => !existsSync(join(racine, 'src/assets/medias', m.fichier)));

const temoignages = await readFile(join(racine, 'src/data/temoignages.ts'), 'utf8');
const nbValides = (temoignages.match(/valide:\s*true/g) ?? []).length;

const dossierCas = join(racine, 'src/content/realisations');
let nbCas = 0;
for (const nom of await readdir(dossierCas)) {
  if (nom.startsWith('_') || !nom.endsWith('.md')) continue;
  if (/^draft:\s*false/m.test(await readFile(join(dossierCas, nom), 'utf8'))) nbCas++;
}

console.log('\nContenus optionnels (masqués tant qu’ils manquent) :');
console.log(`- Médias : ${medias.length - mediasManquants.length}/${medias.length} fournis`);
for (const m of mediasManquants) console.log(`    · ${m.fichier} (${m.section})`);
console.log(`- Témoignages validés : ${nbValides}`);
console.log(`- Études de cas publiées : ${nbCas}`);

if (bloquants.length) {
  console.error(`\nBloquant pour la fusion (${bloquants.length}) :\n- ${bloquants.join('\n- ')}`);
  process.exit(1);
}
console.log('\nAucun contenu bloquant : prêt pour la fusion.');
