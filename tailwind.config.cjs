/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0A101B',
          DEFAULT: '#0A101B',
          dark: '#0A101B',
          100: '#0f172a',
          200: '#0f172a',
          300: '#0f172a',
          400: '#111827',
          500: '#0f172a',
          600: '#0f172a',
          700: '#1e293b',
          800: '#172033',
          900: '#111827',
        },
        red: {
          light: '#dc2626',
          DEFAULT: '#dc2626',
          dark: '#dc2626',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
