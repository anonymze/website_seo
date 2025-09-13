// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://prix-site-internet.fr",
  // experimental: {
  //   fonts: [
  //     {
  //       provider: fontProviders.google(),
  //       name: "Playfair Display",
  //       cssVariable: "--font-playfair",
  //     },
  //   ],
  // },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()],
});
