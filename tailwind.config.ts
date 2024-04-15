import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        base: '320px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)']
        // researcher: ['var(--font-researcher)'],
        // bertana: ['var(--font-bertana)'],
        // gemstone: ['var(--font-gemstone)']
      },
      colors: {
        'prime-green': '#00C906',
        'prime-blue': '#0273F7',
        'prime-purple': '#8003CE',
        'prime-yellow': '#FDDF3E',
        'prime-red': '#CE0351',
        'prime-orange': '#f58d24',
        'prime-pink': '#f300dd'
      }
    }
  },
  plugins: []
};
export default config;
