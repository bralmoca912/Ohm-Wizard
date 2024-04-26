/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{ // Cambiamos el tamaño de las pantallas
      'sm': '0px',
      'md': '496px',
      'lg': '540px',
      'xl': '1260px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}