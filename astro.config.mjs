import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.piercova.com",
  integrations: [sitemap()],
  output: "static",
  build: {
    format: "file",
  },
  prefetch: {
    defaultStrategy: "hover",
  },
});
