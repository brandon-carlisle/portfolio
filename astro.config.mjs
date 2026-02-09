import { defineConfig, passthroughImageService } from "astro/config";
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
    ssr: {
      external: [
        "stream",
        "node:stream",
        "node:buffer",
        "crypto",
        "path",
        "node:path",
      ],
    },
  },

  devToolbar: {
    enabled: true,
  },
});
