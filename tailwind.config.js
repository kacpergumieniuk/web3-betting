/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius:{
        'mini': '0.3px'
      },
     fontFamily: {
      'poppins': ['Poppins'],
      'inter': ['Inter']
     },
     fontSize: {
      'standard': ['1rem', '1.2rem'] 
     }, 
      colors: {
        'primary': '#282534',
        'background-color': '#16171F',
        'secondary': '#EFA9AE',
        'secondary-hover': '#EB9399',
        'text-color': '#9DA9BB'
      },
      letterSpacing: {
        'widest': '.25em',
      }
    },
  },
  plugins: [],
}
