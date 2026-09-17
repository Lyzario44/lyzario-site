// Recommandations LinkedIn reprises de l'ancien site.
// Rien n'est affiché tant que `valide` n'est pas passé à true après accord écrit de la personne
// et vérification du texte exact sur LinkedIn.
import arthur from '../assets/photos/temoignages/arthur-comisso.jpg';
import sayenden from '../assets/photos/temoignages/sayenden-karthigesu.jpg';
import frejus from '../assets/photos/temoignages/frejus-agbo.jpg';
import nicolas from '../assets/photos/temoignages/nicolas-meyre.jpg';
import luther from '../assets/photos/temoignages/luther-akossou.jpg';
import quentin from '../assets/photos/temoignages/quentin-garel.jpg';
import yann from '../assets/photos/temoignages/yann-daru.jpg';
import type { ImageMetadata } from 'astro';

export interface Temoignage {
  nom: string;
  fonction: string;
  citation: string;
  photo?: ImageMetadata;
  source: 'LinkedIn';
  valide: boolean;
}

export const temoignages: Temoignage[] = [
  {
    nom: 'Arthur Comisso',
    fonction: 'Coordinateur CPTS, entrepreneur',
    citation: 'Superbe formation, super accompagnement. Merci Jérôme !',
    photo: arthur,
    source: 'LinkedIn',
    valide: false,
  },
  {
    nom: 'Sayenden Karthigesu',
    fonction: 'Cofondateur, Onmoon',
    citation:
      'J’avais une mauvaise expérience avec les automatisations. Jérôme m’a réconcilié avec tout ça. Maintenant je pilote tout depuis Airtable, c’est un second cerveau.',
    photo: sayenden,
    source: 'LinkedIn',
    valide: false,
  },
  {
    nom: 'Frejus Agbo',
    fonction: 'Signature Visuelle, solopreneurs',
    citation:
      'Dès le premier call, il a levé tous mes doutes : il sait exactement ce qu’il fait. À l’écoute, force de proposition. Foncez les yeux fermés !',
    photo: frejus,
    source: 'LinkedIn',
    valide: false,
  },
  {
    nom: 'Nicolas Meyre',
    fonction: 'Accompagnement de directeurs techniques',
    citation:
      'Un Excel ultra lourd qui ne tenait plus… Jérôme m’a livré un Airtable super complet avec des automatisations et des tableaux de bord clairs. Très content de cette collaboration.',
    photo: nicolas,
    source: 'LinkedIn',
    valide: false,
  },
  {
    nom: 'Luther Akossou',
    fonction: 'Head of Design, LK360',
    citation:
      'Vrai expert Airtable, j’ai été bluffé par ses solutions. Travail sur mesure, toujours présent jusqu’au bout. On a gagné des heures et amélioré le suivi de l’équipe.',
    photo: luther,
    source: 'LinkedIn',
    valide: false,
  },
  {
    nom: 'Quentin Garel',
    fonction: 'Copywriter',
    citation:
      'Base Airtable pour la prospection et la com : plus d’oublis, données à jour. Jérôme est attentif, pédago, et ses conseils m’ont fait gagner du temps pour mon cœur de métier.',
    photo: quentin,
    source: 'LinkedIn',
    valide: false,
  },
  {
    nom: 'Yann Daru',
    fonction: 'Coach mindset et pricing',
    citation:
      'Il traduit les concepts techniques en solutions pratiques adaptées à mes besoins. Excellent pédagogue, je suis devenu autonome sur mes bases. Ne cherchez pas plus loin.',
    photo: yann,
    source: 'LinkedIn',
    valide: false,
  },
];

export const temoignagesValides = temoignages.filter((t) => t.valide);
