/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        '2xl': '1400px',
      },
    },

    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      '2xl': '1400px',
    },

    extend: {
      boxShadow: {
        "menuShadow": "rgb(0 0 0 / 12%) 0px 2px 12px",
        "searchDetail": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        "tourCard": "0 1px 2px rgba(0, 0, 0, 0.1)",
        "tourCardHover": "0 5px 8px rgba(0, 0, 0, 0.05)",
        "tourInfo": "0 4px 4px 0 rgba(0, 0, 0, 0.05)",
        "authForm": "25px 30px 55px #555",
        "card": "0 7px 25px rgba(0,0,0,0.08)",
        "input": "0 0 0 2px rgba(5, 145, 255, 0.1)",
      },

      backgroundImage: {
        "hero": "url('/banner.webp')",
        "footer": "url('/footer3.jpg')",
      },

      colors: {
        "black": "#161823",
        "header": "rgba(37, 155, 217, 0.6)",
        "greyHover": "#16182308",
        "white": "#fff",
        "greyLight": "#d2d6df",
        "grey": "#76809B",
        "form-border": "#d9d9d9",
        "water": "#32a6e6",
        "orange": "#fea415",
        "dark-cloud": "#515458",
        "sunny": "#ff4300",
        "bgSection": "rgba(37, 155, 217, 0.2)",
        "sky": "#259bd9",
        "sky-dark": "#29539f",
      },
      fontFamily: {
        robotoRegular: ['RobotoRegular', 'sans-serif'],
        robotoBold: ['RobotoBold', 'sans-serif'],
        signikaBold: ['SignikaBold', 'sans-serif'],
        cloudy: ['Cloudy', 'sans-serif'],
        logo: ['Logo', 'sans-serif'],
      },
      keyframes: {
        showForm: {
          "0% , 50%": {
            opacity: 0,
            zIndex: 1,
          },
          "50.1% , 100%": {
            opacity: 1,
            zIndex: 5,
          },
        }
      },
      animation: {
        showForm: `showForm 0.2s ease-in-out`
      }
    },
  },
  plugins: [],
}

