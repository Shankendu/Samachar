/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation:{
        'slide-left': 'slideLeft 1s ease',
        'slide-right': 'slideRight 1s ease',
      },
      keyframes:{
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        slideRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        },
      }
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontFamily:{
      croissant: ["'Croissant One'", "cursive"],
      montserrat: ['Montserrat', "sans-serif"],
      playfair: ["'Playfair Display'", "serif"],
      dm: ["'DM Serif Display'", "serif"]

    }
  },
  plugins: [],
}

