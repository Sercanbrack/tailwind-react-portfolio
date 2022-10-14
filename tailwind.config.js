/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {

    },
    fontFamily: {
      sans: ['Montserrat'],
      serif: ['PT Serif']
    },
    extend: {},
  },
  plugins: [],
}
