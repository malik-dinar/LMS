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
          DEFAULT: '#0F1145', 
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