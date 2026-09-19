// Contenu de l'offre, repris de « Offre Lyzario.pdf » et des décisions validées (17/09/2026).
// Aucun tarif n'est publié sur le site : le périmètre et la proposition commerciale sont établis après l'audit.
// Contrôle : npm run check:tarifs

// Audit offert : porte d'entrée du parcours commercial.
export const audit = {
  promesse:
    'Audit offert avec une proposition de structuration de vos process et une première maquette de votre outil à vos couleurs.',
  recevez: [
    {
      titre: 'Un échange de 30 minutes',
      texte: 'Vous m’expliquez comment votre entreprise fonctionne, quels outils vous utilisez et ce qui vous prend le plus de temps.',
    },
    {
      titre: 'Les points qui coincent',
      texte: 'Je repère les principaux points de friction dans votre organisation.',
    },
    {
      titre: 'Une proposition de structuration',
      texte: 'Une proposition courte pour remettre au carré vos process prioritaires.',
    },
    {
      titre: 'Une première maquette à vos couleurs',
      texte: 'Un écran clé de votre futur outil, pour visualiser concrètement la solution possible.',
    },
  ],
  gardeFous: [
    'Offert et sans engagement.',
    'Réservé aux entreprises dont le besoin correspond à ce que je fais.',
    'La proposition reste synthétique.',
    'La maquette montre un seul écran clé. Elle est visuelle, pas fonctionnelle.',
    'Ce n’est ni un développement, ni une architecture technique complète, ni un cahier des charges détaillé.',
  ],
};

export const parcours = [
  'Audit offert',
  'Proposition de structuration et première maquette',
  'Validation du besoin et du périmètre',
  'Proposition commerciale personnalisée',
  'Réalisation',
  '30 jours de stabilisation',
  'Maintenance facultative',
];

export const propositionApresAudit =
  'Après l’audit, je vous propose un périmètre clair et une proposition commerciale adaptée à votre entreprise.';

export const miseEnPlace = {
  inclus: [
    'Analyse de votre organisation',
    'Analyse des process et restructuration',
    'Construction de votre outil',
    'Automatisations nécessaires',
    'Mise en production',
    'Tests et ajustements',
    'Formation de votre équipe',
    '30 jours de stabilisation après la mise en ligne',
  ],
  horsPerimetre: 'Toute demande complémentaire ou évolution importante fait l’objet d’un devis séparé.',
};

export const maintenance = {
  comprend: [
    'Surveillance du bon fonctionnement',
    'Suivi des automatisations',
    'Correction des bugs sur ce qui a été livré',
    'Maintenance technique',
    'Support en cas de problème',
    'Petits ajustements simples, encadrés au devis',
    'Vérification régulière du système',
  ],
  // Le volume des « petits ajustements » est borné par les CGV (art. 17) et par le devis.
  horsPerimetre:
    'Les nouvelles fonctionnalités, les changements importants de processus et les migrations font l’objet d’un devis séparé.',
};

// Propriété : formulation alignée sur les CGV (comptes au nom du client ou remis à la livraison,
// cession des livrables spécifiques après paiement intégral).
export const hebergement =
  'Les comptes nécessaires au fonctionnement sont créés à votre nom ou vous sont remis à la livraison.';

// Abonnement technique : distinct de la maintenance, il couvre le fonctionnement et l'hébergement
// de l'interface. Son existence doit être visible sur le site ; son prix reste au devis.
export const abonnementTechnique = {
  titre: 'L’abonnement technique',
  role: 'Il couvre le fonctionnement et l’hébergement de votre interface. Il est distinct de la maintenance.',
  points: [
    'Nécessaire pour que votre interface reste en ligne',
    'Sans engagement, résiliable à tout moment',
    'Effet à la fin de la période mensuelle déjà payée',
  ],
  siArret:
    'Si vous l’arrêtez, vous conservez vos comptes et votre solution. Il vous revient alors de reprendre directement à votre charge les abonnements et services nécessaires : sans cette reprise, le maintien en ligne n’est pas garanti.',
};
