module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cardBlue: '#2E3A47',
        bgBlue: '#283038'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
