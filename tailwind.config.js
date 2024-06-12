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
      colors: {
        "black": "#161823",
        "white": "#fff",
        "gray": "#0000001f",
        "water": "#32a6e6",
        "sky": "#73c2eb",
        "sky-dark": "027ebc",
      },
      fontFamily: {
        robotoRegular: ['RobotoRegular', 'sans-serif'],
        robotoBold: ['RobotoBold', 'sans-serif'],
        signikaBold: ['SignikaBold', 'sans-serif'],
        cloudy: ['Cloudy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

