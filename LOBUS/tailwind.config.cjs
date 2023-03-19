/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,vue}',
    './src/components/**/*.{html,js,vue}',
    './src/*.{html,js,vue}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/zelij.png')",
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
      gray: '#969CA3'
    }
  },
  plugins: [],
};
