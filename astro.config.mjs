// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import compressor from 'astro-compressor';
export default defineConfig({
    site: 'https://antareepdey.github.io',
    build: {
        format: 'file',
    },
    output: 'static',
    devToolbar: {
        enabled: false
    },
    integrations: [
        mdx(),
        sitemap(),
        react(),
        compressor({ gzip: true, brotli: true }),
    ],
});
