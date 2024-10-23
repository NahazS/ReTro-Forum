/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily:{
        Mulish:['Mulish', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(18, 19, 45, 0.05) 0%, rgba(18, 19, 45, 0.00) 100%)',
      },
    },
  },
  plugins: [],
}