// Chaque réponse s'appuie uniquement sur l'offre PDF et les décisions validées.
// Aucun tarif n'est publié (décision du 17/09/2026) : le périmètre et la proposition commerciale suivent l'audit.
// Questions volontairement absentes tant que l'information n'est pas fournie : délais, zone d'intervention sur place.
// L'abonnement technique et la maintenance sont présentés séparément : le premier conditionne le maintien en ligne.
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
    question: 'Quelle différence entre l’abonnement technique et la maintenance ?',
    reponse:
      'Ce sont deux choses distinctes. L’abonnement technique couvre le fonctionnement et l’hébergement de votre interface : il est nécessaire pour qu’elle reste en ligne. La maintenance, elle, est facultative : elle sert à surveiller, corriger et ajuster. Les deux sont sans engagement et leur prix figure dans votre devis.',
  },
  {
    question: 'Si j’arrête la maintenance, mon outil continue-t-il de fonctionner ?',
    reponse:
      'Oui. Le suivi mensuel sert à surveiller, corriger et ajuster, mais vous pouvez l’arrêter quand vous voulez : votre outil continue de fonctionner.',
  },
  {
    question: 'Et si j’arrête l’abonnement technique ?',
    reponse:
      'Vous conservez vos comptes, vos données et votre solution. Il vous revient alors de reprendre directement à votre charge les abonnements et services nécessaires à son fonctionnement. Sans cette reprise, le maintien en ligne n’est pas garanti. La résiliation prend effet à la fin de la période mensuelle déjà payée.',
  },
  {
    question: 'Faut-il changer tous nos outils ?',
    reponse:
      'Non. Je garde les outils que vous utilisez déjà quand ils sont utiles, et je les relie à votre nouvel espace. L’information circule sans être recopiée d’un endroit à l’autre.',
  },
  {
    question: 'À qui appartiennent l’outil et les données ?',
    reponse:
      'À vous. Les comptes nécessaires au fonctionnement sont créés à votre nom ou vous sont remis à la livraison : application, données, accès, projet WeWeb, base de données. Les éléments réalisés spécifiquement pour vous vous sont acquis après paiement intégral. Je conserve en revanche mes méthodes et mes composants génériques réutilisables, et les plateformes utilisées restent soumises à leurs propres licences.',
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
