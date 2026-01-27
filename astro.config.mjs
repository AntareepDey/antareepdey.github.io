// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import compressor from 'astro-compressor';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
        compressor({ gzip: false, brotli: true }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        shikiConfig: {
            themes: {
                light: 'material-theme-lighter',
                dark: 'github-dark-dimmed',
            },
            defaultColor: "light",
            wrap: true
        }
    }
});
