import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#446f76',
        infinitive: '#3d5371',
        infinitiveLight: '#3d537186',
        past: '#8a7852',
        pastParticiple: '#c27658',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfairDisplay: ['Playfair Display', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
