import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import compressor from "astro-compressor";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site:'https://antareepdey.github.io',
  format: 'file',
  output: 'static',
  integrations: [tailwind(), react(), compressor({ gzip: false, brotli: true }), sitemap()],
  devToolbar: {
    enabled: false
  }
});