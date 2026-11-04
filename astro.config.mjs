// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://meganchang.net",
  integrations: [react()],
  // Astro's HTML compression drops the space between a word and an inline tag that
  // Prettier wrapped onto the next line (e.g. "and\n<strong>"), gluing words together.
  compressHTML: false,
});
