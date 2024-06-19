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
        "tourCardHover": "0 5px 8px rgba(0, 0, 0, 0.05)"
      },

      backgroundImage: {
        "hero": "url('/banner4.webp')",
      },

      colors: {
        "black": "#161823",
        // "header": "rgba(0,0,0,0.6)",
        "header": "rgba(37, 155, 217, 0.6)",
        "greyHover": "#16182308",
        "white": "#fff",
        "grey": "#76809B",
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
    },
  },
  plugins: [],
}

