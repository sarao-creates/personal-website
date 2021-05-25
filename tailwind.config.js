module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sameer': "url('/src/assets/sameer.jpeg')",
        'fidelity': "url('/src/assets/experience/fidelity.png')",
        'cisco': "url('/src/assets/experience/cisco.png')",
        'jemi': "url('/src/assets/experience/jemi.png')",
        'cssg': "url('/src/assets/experience/cssg.png')",
        '180': "url('/src/assets/experience/180.png')",
        'vrware': "url('/src/assets/experience/vrware.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
