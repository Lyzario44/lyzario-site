// Logos clients affichés dans le bandeau du hero.
// Seuls ces six logos, fournis et autorisés, peuvent apparaître : aucun autre nom
// ni logo d'entreprise ne doit être ajouté ici sans autorisation explicite.
//
// Les fichiers pointés sont les versions optimisées (silhouette blanche, fond transparent,
// rognées au contenu) générées à partir des captures d'origine. Celles-ci sont conservées
// intactes dans src/assets/medias/_sources/logos-clients/, dossier ignoré par Git.
//
// `hauteur` est la hauteur d'affichage en pixels. Elle est réglée logo par logo pour
// équilibrer optiquement le bandeau : un logotype sans jambages (onmoon) doit être
// rendu plus bas qu'un bloc-marque complet pour que les lettres paraissent de taille
// comparable. Aucun logo n'est déformé : seule la hauteur est fixée, la largeur suit.
import type { ImageMetadata } from 'astro';
import camifHabitat from '../assets/logos-clients/optimises/camif-habitat.png';
import reseaulution from '../assets/logos-clients/optimises/reseaulution.png';
import soflux from '../assets/logos-clients/optimises/soflux.png';
import lasignature from '../assets/logos-clients/optimises/lasignature.png';
import cpts from '../assets/logos-clients/optimises/cpts-porte-de-france-moselle.png';
import onmoon from '../assets/logos-clients/optimises/onmoon.png';

export interface LogoClient {
  /** Nom réel de l'entreprise, repris tel quel dans le texte alternatif. */
  nom: string;
  image: ImageMetadata;
  hauteur: number;
}

// Ordre choisi pour alterner les logotypes larges et les marques compactes,
// afin que le défilement garde un rythme régulier.
export const logosClients: LogoClient[] = [
  { nom: 'Camif Habitat', image: camifHabitat, hauteur: 30 },
  { nom: 'RéseauLution', image: reseaulution, hauteur: 34 },
  { nom: 'Soflux', image: soflux, hauteur: 30 },
  { nom: 'LaSignature', image: lasignature, hauteur: 30 },
  // Emblème carré : rendu plus haut que les logotypes en ligne pour que le sigle
  // atteigne une taille de lecture comparable.
  { nom: 'CPTS Porte de France Moselle', image: cpts, hauteur: 46 },
  { nom: 'Onmoon', image: onmoon, hauteur: 20 },
];
