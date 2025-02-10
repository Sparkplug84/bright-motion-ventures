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
  },
  plugins: [],
}
