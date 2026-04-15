import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: 'src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    title: z.object({
      en: z.string(),
      sk: z.string(),
    }),
    description: z.object({
      en: z.string(),
      sk: z.string(),
    }),
    image: z.string(),
    logo: z.string().optional(),
    url: z.string().optional(),
    date: z.string(),
    order: z.number().optional(),
    featured: z.boolean().default(false),
    tech: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
