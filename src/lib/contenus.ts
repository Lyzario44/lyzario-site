import { getCollection } from 'astro:content';
import { media, visible } from './medias';
import { nav } from '../data/site';

export const capturesRealisations = [
  media('capture-suivi-interventions'),
  media('capture-acces-membres'),
  media('capture-action-bouton'),
];

export async function casPublies() {
  const cas = await getCollection('realisations', ({ data }) => data.draft !== true);
  return cas.sort((a, b) => b.data.datePublication.valueOf() - a.data.datePublication.valueOf());
}

/** La section Réalisations n'existe que si une capture ou une étude de cas réelle est disponible. */
export async function realisationsVisibles() {
  return capturesRealisations.some(visible) || (await casPublies()).length > 0;
}

export async function navigation() {
  const avecRealisations = await realisationsVisibles();
  return nav.filter((item) => avecRealisations || item.href !== '/#realisations');
}
