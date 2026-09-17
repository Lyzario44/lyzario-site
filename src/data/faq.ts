// Chaque réponse s'appuie uniquement sur l'offre PDF et les décisions validées.
// Aucun tarif n'est publié (décision du 17/09/2026) : le périmètre et la proposition commerciale suivent l'audit.
// Questions volontairement absentes tant que l'information n'est pas fournie : délais, zone d'intervention sur place.
import { propositionApresAudit } from './offre';

export const faq = [
  {
    question: 'L’audit est-il vraiment offert ?',
    reponse:
      'Oui, et sans engagement. Il est réservé aux entreprises dont le besoin correspond à ce que je fais : centraliser l’information, structurer les process et automatiser les tâches répétitives.',
  },
  {
    question: 'Qu’est-ce que je reçois après l’audit ?',
    reponse:
      'Une proposition synthétique pour structurer vos process prioritaires et une première maquette d’un écran clé de votre outil, à vos couleurs. La maquette est visuelle : ce n’est pas encore un outil qui fonctionne, ni une architecture technique complète, ni un cahier des charges détaillé.',
  },
  {
    question: 'Combien coûte l’accompagnement ?',
    reponse: `Cela dépend de votre organisation et de ce qu’il faut mettre en place. ${propositionApresAudit} Toute demande complémentaire ou évolution importante fait ensuite l’objet d’un devis séparé.`,
  },
  {
    question: 'Qu’est-ce que comprend l’accompagnement ?',
    reponse:
      'L’analyse de votre organisation et de vos process, la construction de votre outil, les automatisations nécessaires, la mise en production, les tests et ajustements, la formation de votre équipe et 30 jours de stabilisation après la mise en ligne.',
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    reponse:
      'Pendant les 30 premiers jours, je stabilise le système. Ensuite, le suivi mensuel est facultatif et sans engagement.',
  },
  {
    question: 'Si j’arrête la maintenance, mon outil continue-t-il de fonctionner ?',
    reponse:
      'Oui. Le système fonctionne sans moi. Le suivi mensuel sert à surveiller, corriger et ajuster, mais vous pouvez l’arrêter quand vous voulez.',
  },
  {
    question: 'Faut-il changer tous nos outils ?',
    reponse:
      'Non. Je garde les outils que vous utilisez déjà quand ils sont utiles, et je les relie à votre nouvel espace. L’information circule sans être recopiée d’un endroit à l’autre.',
  },
  {
    question: 'À qui appartiennent l’outil et les données ?',
    reponse:
      'À vous : l’application, les données, les accès et l’hébergement, qui est directement à votre nom. Je construis votre système chez vous, pas chez moi. Si notre collaboration s’arrête, tout continue de fonctionner.',
  },
  {
    question: 'Les évolutions sont-elles comprises dans la maintenance ?',
    reponse:
      'Les petits ajustements simples, oui. Les nouvelles fonctionnalités ou les évolutions importantes font l’objet d’un devis séparé.',
  },
].map((item) => ({
  question: item.question.replace(/ ([?!:;])/g, ' $1'),
  reponse: item.reponse.replace(/ ([?!:;])/g, ' $1'),
}));
