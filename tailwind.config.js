/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'positive': '#eaac8b',
        'negative': '#e56b6f',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
