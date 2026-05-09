/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        white: '#f5f5f5',
        red: '#CC0000',
        yellow: '#FFD600',
      },
      fontFamily: {
        khand: ['Khand', 'system-ui', 'sans-serif'],
        switzer: ['Switzer', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
