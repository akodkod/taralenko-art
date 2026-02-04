// @ts-check
import { defineConfig, fontProviders } from "astro/config"

import tailwindcss from "@tailwindcss/vite"
import favicons from "astro-favicons"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    contentIntellisense: true,
    fonts: [{
      provider: fontProviders.google(),
      name: "EB Garamond",
      cssVariable: "--font-eb-garamond",
    }, {
      provider: fontProviders.google(),
      name: "Inter",
      weights: [400, 500, 600],
      cssVariable: "--font-inter",
    }],
  },

  integrations: [favicons({
    input: "public/favicon-base.png",
    name: "Taralenko Art",
    short_name: "Taralenko Art",
  })],
})
