/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'positive': '#eaac8b',
        'negative': '#e56b6f',
        'happy': '#EAAC8B',
        'happy-alt': '#FFE9DD',
        'sad': '#355070',
        'sad-alt': '#7B8DA4',
        'angry': '#B56576',
        'angry-alt': '#F0C8D1',
        'relaxed': '#e56b6f',
        'relaxed-alt': '#FEC5C6',
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
