/// <reference types="astro/client" />

declare namespace Astro {
    interface Locals {
      paraglide: {
        lang: string; // Current language tag (e.g., 'en', 'de')
        dir: "ltr" | "rtl"; // Text direction
      };
    }
  }
  