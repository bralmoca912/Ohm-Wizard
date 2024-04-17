/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{ // Cambiamos el tamaño de las pantallas
      'sm': '0px',
      'md': '585px',
      'lg': '900px',
      'xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}