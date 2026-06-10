import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:  { 950:'#020810', 900:'#040D1E', 800:'#071429', 700:'#0A1F3D', 600:'#0D2850' },
        brand: { 700:'#0044BB', 600:'#0055CC', 500:'#0066CC', 400:'#1A7FEE', 300:'#4BAAF5', 200:'#93CAFD', 100:'#DBEEFF', 50:'#F0F7FF' },
        cyan:  { 500:'#00C2FF', 400:'#22D3FF' },
        ink:   { primary:'#1A2535', secondary:'#3D5068', muted:'#6B85A0', light:'#9BB2C8' },
        surface: { DEFAULT:'#F5F8FC', card:'#FFFFFF', dark:'#EBF1F8' },
      },
      fontFamily: {
        sans:  ['Outfit','system-ui','sans-serif'],
        serif: ['DM Serif Display','Georgia','serif'],
        mono:  ['Space Mono','monospace'],
      },
      maxWidth: { site:'1200px' },
      boxShadow: {
        card:    '0 1px 3px rgba(4,13,30,0.05),0 4px 14px rgba(4,13,30,0.05)',
        hover:   '0 8px 28px rgba(0,102,204,0.13)',
        nav:     '0 4px 24px rgba(4,13,30,0.08)',
        dropdown:'0 8px 32px rgba(4,13,30,0.12)',
      },
      keyframes: {
        'pulse-dot': { '0%,100%':{ opacity:'1',transform:'scale(1)' }, '50%':{ opacity:'0.35',transform:'scale(1.7)' } },
        'fade-down': { from:{ opacity:'0',transform:'translateY(-6px)' }, to:{ opacity:'1',transform:'translateY(0)' } },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        'fade-down': 'fade-down 0.18s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
