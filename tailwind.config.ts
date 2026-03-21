import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: {
          1: 'var(--color-surface-1)',
          2: 'var(--color-surface-2)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          600: 'var(--color-primary-600)',
        },
        body: 'var(--color-body)',
        muted: 'var(--color-muted)',
        title: 'var(--color-title)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        title: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.35)',
      },
    },
  },
  plugins: [],
};

export default config;
