/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      'mobile-md': '375px',
      // => @media (min-width: 375px) { ... }
      'mobile-lg': '425px',

      tablet: '768px',

      laptop: '1024px',

      desktop: '1280px',
    },
  },
  plugins: [],
};
