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
        'sameer': "url('/src/assets/sameer-test.jpg')",
        'sameer-mob': "url('/src/assets/sameer-mobile.png')",
        'fidelity': "url('/src/assets/experience/fidelity.png')",
        'cisco': "url('/src/assets/experience/cisco.png')",
        'jemi': "url('/src/assets/experience/jemi.png')",
        'cssg': "url('/src/assets/experience/cssg.png')",
        '180': "url('/src/assets/experience/180.png')",
        'vrware': "url('/src/assets/experience/vrware.png')",
        'unc-roommates': "url('/src/assets/projects/proj1.png')",
        'dij': "url('/src/assets/projects/proj2.png')",
        'basilica':"url('/src/assets/photography/basilica.jpg')",
        'eiffel':"url('/src/assets/photography/eiffel-tower.jpg')",
        'ferris':"url('/src/assets/photography/ferris-wheel.jpg')",
        'municipal':"url('/src/assets/photography/municipal.jpg')",
        'parthenon':"url('/src/assets/photography/parthenon.jpg')",
        'sacre':"url('/src/assets/photography/sacre-couer.jpg')",
       }),

       height: {
         'exp': 'calc(0.5 * 100vw)',
         'tablet-exp': 'calc(0.15*100vw)'
       },

       fontSize: {
         'home-about': ['1.6vw', '1.5rem'],
         'home-about-xl': ['1.3vw', '2rem'],
       },
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
