/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca', // Added missing shade
          300: '#fca5a5', // Added missing shade (Fixes the error)
          400: '#f87171', // Added missing shade
          500: '#ef4444', // Red 500
          600: '#dc2626', // Red 600 - Main Brand Color
          700: '#b91c1c', // Red 700
          800: '#991b1b',
          900: '#7f1d1d', // Red 900
          950: '#450a0a',
        },
        dark: {
          800: '#1f2937', // Gray 800
          900: '#111827', // Gray 900
          950: '#030712', // Gray 950 (Deep Black)
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
