/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '20': ['20px', '24px'],
        '24': ['24px', '29px'],
      },
      colors: {
        'orange': '#FF9648',
        'grey': '#D9D9D9',
        'blue': '#1D2570'
      },
      borderRadius: {
        '5': '5px'
      }
    },
  },
  plugins: [],
}

