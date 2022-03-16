module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-section' : "url('/hero.png')",
        'form-landing' : "url('/form-landing.svg')",
        'blog-form-1'  : "url('/blog-form-1.svg')",
        'bg-contact' : "url('/bg-contact.png')",
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
  plugins: [require('@tailwindcss/typography')],
}
