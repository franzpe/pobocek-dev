import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bilingual = z.object({ en: z.string(), sk: z.string() });

const projects = defineCollection({
  loader: glob({ base: 'src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    title: bilingual,
    description: bilingual,
    image: z.string().optional(),
    logo: z.string().optional(),
    url: z.string().optional(),
    date: z.string(),
    order: z.number().optional(),
    featured: z.boolean().default(false),
    tech: z.array(z.string()).optional(),
    // Optional case study fields — when present, WorkDetail renders the deep-dive layout.
    role: bilingual.optional(),
    duration: bilingual.optional(),
    problem: bilingual.optional(),
    solution: bilingual.optional(),
    outcomes: z.array(bilingual).optional(),
  }),
});

export const collections = { projects };
