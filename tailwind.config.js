/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#26272C',
        secondary:'#1A1B1E',
        success:'#18181C',
        warning:'#3E3F47',
      }
    },
  },
  plugins: [],
}

