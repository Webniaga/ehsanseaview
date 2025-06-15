/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7F7',
          100: '#CCF0EF',
          200: '#99E0DF',
          300: '#66D1CF',
          400: '#33C1BF',
          500: '#38B2AC', // turquoise
          600: '#2E8E8A',
          700: '#236B68',
          800: '#174745',
          900: '#0C2423',
        },
        secondary: {
          50: '#EBF5FD',
          100: '#D6EBFA',
          200: '#ADD7F5',
          300: '#85C3F0',
          400: '#5CAEEB',
          500: '#4299E1', // sky blue
          600: '#357AB5',
          700: '#285C88',
          800: '#1A3D5A',
          900: '#0D1F2D',
        },
        accent: {
          50: '#FEF6E8',
          100: '#FEECD0',
          200: '#FDDAA1',
          300: '#FCC772',
          400: '#FBB544',
          500: '#F5DEB3', // sand beige
          600: '#C4B28F',
          700: '#92856C',
          800: '#615948',
          900: '#312C24',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
}