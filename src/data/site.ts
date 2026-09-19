// Informations factuelles uniques du site. Toute donnée affichée ou balisée vient d'ici.
export const site = {
  name: 'Lyzario',
  url: 'https://www.lyzario.fr',
  founder: 'Jérôme Verger',
  // Dénomination obligatoire de l'entrepreneur individuel sur les documents professionnels
  // (art. R. 526-27 du code de commerce, en vigueur depuis le 15 mai 2022).
  legalName: 'Jérôme Verger EI',
  statut: 'Entrepreneur individuel, régime de la micro-entreprise',
  // Franchise en base : aucune TVA ne peut être facturée ni affichée (art. 293 B du CGI).
  tva: 'TVA non applicable, article 293 B du CGI',
  email: 'contact@lyzario.fr',
  // Mention obligatoire pour l'éditeur du site (art. 1er-1, I, 1° de la loi n° 2004-575 dite LCEN).
  // Réservé aux pages juridiques : ce n'est pas un canal commercial affiché sur l'accueil.
  phone: '06 72 64 63 64',
  phoneHref: '+33672646364',
  // Le rendez-vous de 30 minutes est la première étape de l'audit offert.
  bookingUrl: 'https://cal.com/lyzario/30min',
  ctaAudit: 'Demander mon audit offert',
  linkedinUrl: 'https://www.linkedin.com/in/j%C3%A9r%C3%B4me-verger/',
  siret: '897 903 662 00020',
  address: {
    street: '1 bis la Guyoterie',
    postalCode: '44680',
    locality: 'Sainte-Pazanne',
    department: 'Loire-Atlantique',
    country: 'FR',
  },
  proof: '+25 projets menés avec des entreprises',
  // Version des CGV opposable : l'acceptation du devis vaut acceptation de cette version.
  cgvVersion: '19 septembre 2026',
} as const;

export const nav = [
  { label: 'Audit offert', href: '/#audit' },
  { label: 'Méthode', href: '/#methode' },
  { label: 'Réalisations', href: '/#realisations' },
  { label: 'Accompagnement', href: '/#accompagnement' },
  { label: 'FAQ', href: '/#faq' },
] as const;
