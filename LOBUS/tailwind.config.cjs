/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/zelij.png')",
        'steps-bg': "url('/LOBUS/src/assets/bg-steps.png')"
      },
      fontFamily:{
        'Myfont': ['Poppins', 'serif']
      }
    },
    colors:{
      primary: '#F46036',
      secondary: '#083B81',
      silver: '#394F63',
      white: '#fff',
      gray: '#969CA3',
      
    }
  },
  plugins: [],
};
