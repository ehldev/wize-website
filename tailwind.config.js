/** @type {import('tailwindcss').Config} */

const COLOR_PRIMARY = '#10A466'
const COLOR_DARK = '#596066'
const COLOR_DARK_2 = '#1A1D23'
const COLOR_GRAY = '#343A40'
const COLOR_GRAY_2 = '#101828'
const COLOR_GRAY_3 = '#A7A8A9'
const COLOR_LIGHT = '#F9FAFB'
// const COLOR_BLACK = '#101828'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      // // screens: {
      //   'lg': '1440px'
      // },
      padding: {
        DEFAULT: '24px',
        md: '36px',
        lg: '36px',
        xl: '36px',
        '2xl': '36px',
      },
    },
    extend: {
      screens: {
        // 'sm': '640px',  // Personalizar el breakpoint para pantallas pequeñas
        // 'md': '768px',  // Personalizar el breakpoint para pantallas medianas
        // 'lg': '1024px', // Personalizar el breakpoint para pantallas grandes
        'xl': '1116px',
        '2xl': '1116px'
      },
      colors: {
        'wize-primary': COLOR_PRIMARY,
        'wize-dark': COLOR_DARK,
        'wize-dark-2': COLOR_DARK_2,
        // 'wize-black': COLOR_BLACK,
        'wize-gray': COLOR_GRAY,
        'wize-gray-2': COLOR_GRAY_2,
        'wize-gray-3': COLOR_GRAY_3,
        'wize-light': COLOR_LIGHT,
        'wize-gray-medium': '#E5E5E5'
      },
      backgroundColor: {
        'wize-primary-30': `rgba(255, 170, 0, 0.05)`
      }
    },
  },
  plugins: [],
}
