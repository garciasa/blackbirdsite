module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cms-link": "#D99700"
      },
      backgroundImage: {
        'hero-section': "url('https://res.cloudinary.com/agsa/image/upload/f_auto,q_auto/v1/blackbirdsite/zrabuyrty46qdt5oiql3')",
        'form-landing': "url('/form-landing.svg')",
        'blog-form-1': "url('/blog-form-1.svg')",
        'bg-contact': "url('https://res.cloudinary.com/agsa/image/upload/f_auto,q_auto/v1/blackbirdsite/vorytl42fcji1rzvzl11')",
      },
      fontFamily: {
        'architect': 'Architects Daughter, cursive',
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
