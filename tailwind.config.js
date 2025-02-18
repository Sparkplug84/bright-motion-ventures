/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [],
  theme: {
    extend: {
      colors: {
        primaryColour: '#3ec1c9',
      },
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to bottom right,rgb(20,184,166),rgb(3,105,161))',
    },
  },
  plugins: [],
}
