import type { ImageMetadata } from 'astro';
import manifeste from '../data/medias.json';

export type MediaId = (typeof manifeste.medias)[number]['id'];

export interface Media {
  id: string;
  fichier: string;
  section: string;
  titre: string;
  consigne: string;
  ratio: string;
  alt: string;
  legende?: string;
  src?: ImageMetadata;
}

const fichiers = import.meta.glob<{ default: ImageMetadata }>('/src/assets/medias/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

/** Affiche les emplacements vides en local : PUBLIC_AFFICHER_EMPLACEMENTS=true npm run dev */
export const afficherEmplacements = import.meta.env.PUBLIC_AFFICHER_EMPLACEMENTS === 'true';

export function media(id: MediaId): Media {
  const entree = manifeste.medias.find((m) => m.id === id);
  if (!entree) throw new Error(`Média inconnu : ${id}`);
  const cle = Object.keys(fichiers).find((chemin) => chemin.endsWith(`/${entree.fichier}`));
  return { ...entree, src: cle ? fichiers[cle].default : undefined };
}

/** Vrai si le média est disponible, ou si l'on prévisualise les emplacements en local. */
export const visible = (m: Media) => Boolean(m.src) || afficherEmplacements;
