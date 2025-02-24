import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    author: z.string(),
    date: z.string(),
    image: z.string(),
    authorTitle: z.string().optional(),
    readTime: z.string().optional(),
  })
});

export const collections = {
  'blog': blogCollection,
}; 