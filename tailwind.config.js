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
        'orange': '#FF9648'
      },
      borderRadius: {
        '5': '5px'
      }
    },
  },
  plugins: [],
}

