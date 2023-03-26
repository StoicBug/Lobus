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
        'steps-bg': "url('/LOBUS/src/assets/bg-steps.png')",
		'landing-bg': "url('./src/assets/landing-bg.png')",

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
      transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			slate: colors.slate,
			zinc: colors.zinc,
			gray: colors.gray,
			neutral: colors.blueGray,
			stone: colors.stone,
      
    }
  },
  plugins: [],
};
