import { defineConfig, envField, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://brandoncarlisle.co.uk",

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

  env: {
    schema: {
      PUBLIC_CF_SITE_KEY: envField.string({context: "client", access: "public", optional: false}),
    }
  }
});
