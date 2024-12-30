import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import compressor from "astro-compressor";

export default defineConfig({
  output: 'static',
  integrations: [tailwind(), react(),compressor({ gzip: false, brotli: true })],
  devToolbar: {
    enabled: false
  }
});