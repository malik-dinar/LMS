/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '85vh': '85vh',
      },
      colors: {
        blue: {
          // DEFAULT: '#494bbf', 
           DEFAULT: '#0f1145', 
        },
        blueGray:{
          DEFAULT:'#6699CC',
        },
        violet: {
          DEFAULT: '#430269', 
        },
        head: {
          DEFAULT: '#99EFD0', 
        },
        footer:{
          DEFAULT:'#63039b'
        }
      },
    },
  },
  plugins: [],
}