const { faCalculator } = require("@fortawesome/free-solid-svg-icons");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      'proj': '0 0 6px 0 rgb(58, 58, 58, 0.15)',
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      // 'md': {'max': '767px'},
      // 'sm': {'max': '639px'},
      'sm': {'max': '767px'},
    },
    extend: {
      backgroundImage: theme => ({
        'sameer': "url('/src/assets/sameer.jpeg')",
        'sameer-mob': "url('/src/assets/sameer-mobile.png')",
        'fidelity': "url('/src/assets/experience/fidelity.png')",
        'cisco': "url('/src/assets/experience/cisco.png')",
        'jemi': "url('/src/assets/experience/jemi.png')",
        'cssg': "url('/src/assets/experience/cssg.png')",
        '180': "url('/src/assets/experience/180.png')",
        'vrware': "url('/src/assets/experience/vrware.png')",
        'unc-roommates': "url('/src/assets/projects/proj1.png')",
        'dij': "url('/src/assets/projects/proj2.png')",

       }),

       height: {
         'exp': 'calc(0.5 * 100vw)',
       }
    },
    
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
