import { defineConfig, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://brandoncarlisle.co.uk",

  output: "server",

  adapter: cloudflare({
    imageService: "passthrough",
  }),

  image: {
    service: passthroughImageService(),
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: true,
  },
});
