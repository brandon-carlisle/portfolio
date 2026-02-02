import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://brandoncarlisle.co.uk",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: true,
  },
});
