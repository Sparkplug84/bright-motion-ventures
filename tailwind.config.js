/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [],
  theme: {
    extend: {
      animation: {
        fadeInDown: 'fade-in-down 1s ease-out',
        fadeInUp: 'fade-in-up 1s ease-out forwards',
        fadeInLeft: 'fade-in-left 0.8s ease-out forwards',
        fadeInRight: 'fade-in-right 0.8s ease-out forwards',
      },
      animationDelay: {
        '1s': '1s',
        // Add more delays if needed
      },
      colors: {
        primaryColour: '#3ec1c9',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to bottom right,rgb(20,184,166),rgb(2,132,199))',
      // 'custom-gradient2': 'linear-gradient(to bottom right,rgb(173, 76, 214),rgb(233, 72, 91))',
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const delays = theme('animationDelay')
      const utilities = Object.entries(delays).reduce((acc, [key, value]) => {
        acc[`.${e(`animation-delay-${key}`)}`] = { animationDelay: value }
        return acc
      }, {})
      addUtilities(utilities)
    },
  ],
}
