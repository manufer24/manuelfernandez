/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "0.75rem",
          md: "1rem",
        },
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1366px",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          DEFAULT: "#fcfcfc",
          "light-contrast": "#eee",
          dark: "#20252c",
          "dark-contrast": "#3c4654",
        },
        letter: {
          DEFAULT: "#202225",
          dark: "#eee",
        },
        link: {
          DEFAULT: "#004d99",
          dark: "#73cffa",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
