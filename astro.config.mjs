// @ts-check
import { defineConfig, fontProviders } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

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
      weights: [400, 500, 600, 700],
      cssVariable: "--font-inter",
    }],
  },
})
