import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://brandoncarlisle.co.uk",

  adapter: cloudflare(),

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: true,
  },
});
