import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    category: z.enum(['news', 'domain']).default('domain'),
    image: z.string().optional(),
    urlSlug: z.string().optional(),
  }),
});

export const collections = { blog };
