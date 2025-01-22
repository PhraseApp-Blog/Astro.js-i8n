import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(),
    paraglide({
      // recommended settings
      project: "./project.inlang",
      outdir: "./src/paraglide", //where your files should be
    }),
  ],
  i18n: {
    defaultLocale: "en", // The default language used as a fallback
    locales: ["en", "es", "fr"], // All supported languages on the site
    routing: {
      prefixDefaultLocale: true, // URL structure will be:
      // / -> English (default)
      // /es -> Spanish
      // /fr -> French
    },
  },
});
