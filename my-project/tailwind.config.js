module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sens:["Open Sans"]
      },
      gridTemplateColumns:{
       "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
