import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Études de cas. Les fichiers commençant par « _ » (modèle) sont ignorés.
// Un cas n'est publié que si `draft: false` : tous les champs affichés doivent venir du client ou de Jérôme.
const realisations = defineCollection({
  loader: glob({ base: './src/content/realisations', pattern: '[!_]*.md' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(true),
      titre: z.string().min(10),
      metaTitle: z.string().max(60),
      metaDescription: z.string().min(50).max(160),
      resume: z.string(),
      datePublication: z.coerce.date(),
      client: z.object({
        nom: z.string().optional(),
        anonymise: z.boolean(),
        secteur: z.string(),
        taille: z.string().optional(),
        localisation: z.string().optional(),
      }),
      outils: z.array(z.string()).default([]),
      duree: z.string().optional(),
      contexte: z.string(),
      probleme: z.string(),
      resultats: z
        .array(
          z.object({
            texte: z.string(),
            nature: z.enum(['mesure', 'declare-par-le-client']),
          }),
        )
        .default([]),
      captures: z
        .array(
          z.object({
            src: image(),
            alt: z.string().min(10),
            legende: z.string().optional(),
          }),
        )
        .default([]),
      temoignage: z
        .object({
          citation: z.string(),
          auteur: z.string(),
          fonction: z.string(),
        })
        .optional(),
    }),
});

export const collections = { realisations };
