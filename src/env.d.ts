// src/env.d.ts
/// <reference types="astro/client" />

import { z } from 'zod';

declare module 'astro:content' {
  interface Schemas {
    recipes: z.infer<typeof import('./content/config').collections.recipes.schema>;
  }
}