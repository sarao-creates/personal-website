module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sameer': "url('/src/assets/sameer.jpeg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
