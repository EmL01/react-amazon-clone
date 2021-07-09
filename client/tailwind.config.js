module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        default: ['Poppins'],
      },
      colors: {
        body: '#EAEDED',
        brand: '#febd69',
        black: '#131921',
        darkGray: '#232f3e',
        lightBlue: '#F2FAFB',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
