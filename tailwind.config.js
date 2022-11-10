/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/Comp/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      Cyellow: '#FBF700',
      CDark_blue: '#00415D',
      Cblue: '#1785C2'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
