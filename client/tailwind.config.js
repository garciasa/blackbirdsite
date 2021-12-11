module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-section' : "url('/hero.png')",
      },
      fontFamily: {
        'architect' : 'Architects Daughter, cursive',
        'anton': 'Anton, sans-serif',
        'lato': 'Lato'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
