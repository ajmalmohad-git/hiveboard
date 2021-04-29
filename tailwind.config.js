const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      hiveprimary1:'#e5e7eb',
      hiveprimary2:'#dde5f3',
      hivetext1:'#1f2937',
      hiveaccent1:'#4338ca',
      hiveaccent2:'#fde047',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
