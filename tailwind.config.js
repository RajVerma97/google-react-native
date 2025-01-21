/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'poppins-regular': ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['OpenSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
