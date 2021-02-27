const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const customForms = require('@tailwindcss/custom-forms')

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      body: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      primary: {
        default: '#ED5359',
        dark: '#DF494E',
        light: '#FFBCC0',
        background: '#FFF4F5',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      backgroundColor: ['active'],
      width: ['group-hover'],
      borderColor: ['focus-visible', 'active'],
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible'],
      scale: ['active', 'group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [customForms],
}
