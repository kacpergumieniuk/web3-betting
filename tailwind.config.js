/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#EFA9AE',
        'secondary-hover': '#EB9399'
      },
    },
  },
  plugins: [],
}
