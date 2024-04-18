/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{ // Cambiamos el tamaño de las pantallas
      'sm': '0px',
      'md': '496px',
      'lg': '585px',
      'xl': '900px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}