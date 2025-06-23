/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-glassmorphism'),
  ],
} 