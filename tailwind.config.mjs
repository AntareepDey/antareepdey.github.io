/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: ['class', '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg-color)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-accent': 'var(--text-accent)',
                'footer-border': 'var(--footer-border)',
                'nav-bg': 'var(--nav-bg)',
                'toggle-bg': 'var(--toggle-bg)',
                'toggle-circle': 'var(--toggle-circle)',
                'border-subtle': 'var(--border-subtle)',
            },
            fontFamily: {
                newsreader: ['Newsreader', 'serif'],
                mono: ['DM Mono', 'monospace'],
            },
            maxWidth: {
                'content': '800px',
            },
            spacing: {
                'nav-height': '64px',
            },
        },
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '850px',
            'xl': '1024px',
        },
    },
    plugins: [],
};
