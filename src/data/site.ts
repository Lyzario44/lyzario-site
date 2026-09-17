// Informations factuelles uniques du site. Toute donnée affichée ou balisée vient d'ici.
export const site = {
  name: 'Lyzario',
  url: 'https://www.lyzario.fr',
  founder: 'Jérôme Verger',
  email: 'contact@lyzario.fr',
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
} as const;

export const nav = [
  { label: 'Audit offert', href: '/#audit' },
  { label: 'Méthode', href: '/#methode' },
  { label: 'Réalisations', href: '/#realisations' },
  { label: 'Accompagnement', href: '/#accompagnement' },
  { label: 'FAQ', href: '/#faq' },
] as const;
