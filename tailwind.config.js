/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,json}'],
  safelist: [
    'translate-y-2',
    '-translate-y-2',
    'rotate-45',
    '-rotate-45',
    'opacity-0',
    'max-h-0',
    'max-h-[2000px]',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'violet': '#C4B7F1',
        'dark-violet': '#1A1A33',
        'lime': '#D3FFB5',
        'beige': '#FFFDE9',
        'light-grey': 'rgba(26, 26, 51, 0.30)',
        'medium-grey': 'rgba(26, 26, 51, 0.50)',
      },
      fontFamily: {
        sans: ['Area', 'system-ui', 'sans-serif'],
      },
      willChange: {
        'm-height': 'max-height',
      },
    },
  },
  plugins: [],
};
