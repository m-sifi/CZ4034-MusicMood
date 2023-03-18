/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'positive': '#eaac8b',
        'negative': '#e56b6f',
      },
      gridTemplateColumns: {
        'search': '400px minmax(900px, 1fr)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
