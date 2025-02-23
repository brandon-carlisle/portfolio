import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://brandoncarlisle.co.uk",
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: false,
});
