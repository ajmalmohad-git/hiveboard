const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '508px',
      md: '728px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      hiveprimary1: '#e5e7eb',
      hiveprimary2: '#dde5f3',
      hivetext1: '#1f2937',
      hiveaccent1: '#4338ca',
      hiveaccent2: '#fde047',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '2.9rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
