/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        '12': ['12px', '15px'],
        '14': ['14px', '17px'],
        '15': ['15px', '18px'],
        '16': ['16px', '20px'],
        '18': ['18px', '22px'],
        '20': ['20px', '24px'],
        '22': ['22px', '27px'],
        '24': ['24px', '29px'],
        '25': ['25px', '30px'],
        '28': ['28px', '34px'],
        '32': ['32px', '39px'],
        '40': ['40px', '49px'],
        '48': ['48px', '59px'],
      },
      fontFamily: {
        'montserrat': 'Montserrat'
      },
      colors: {
        'orange': '#FF9648',
        'grey': '#D9D9D9',
        'grey-darker': '#7B7B7B',
        'blue': '#1D2570',
        'green': '#396746',
        'red': '#BF0000',
        'background': '#F0F6FD',
        'description': '#7B7B7B',
        'black47':'rgba(0, 0, 0, 0.47)',
        'black50':'rgba(0, 0, 0, 0.50)'
      },
      borderRadius: {
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [],
}

