// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({  // z.object() defines the shape of our frontmatter
    name: z.string(),
    category: z.string(),
    description: z.string(),
    complexity: z.string(),
    prepTime: z.string(),
    cookTime: z.string(),
    ingredients: z.record(z.string(), z.array(z.string())),
    image: z.string().optional()
  })
});

export const collections = {
  'recipes': recipes,
};