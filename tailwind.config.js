/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#d92329',
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}