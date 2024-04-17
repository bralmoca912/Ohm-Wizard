/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{ // Cambiamos el tamaño de las pantallas
      'sm': '720px',
      'md': '930px',
      'lg': '1230px',
      'xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}