/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      custom: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      screens: {
        smallPc: "860px",
        // ...defaultTheme.screens,
      },
      gridTemplateColumns: {
        custom: "45fr 55fr",
        custom1: "1fr 1fr",
        custom2: "60fr 40fr",
        footerDesktop: "2fr repeat(4, 1fr)",
      },
      colors: {
        blue: {
          50: "#1F2C46",
          100: "#FBFBFB",
          200: "#3C63B0",
        },
        gold: `#FFD60D`,
        grey: {
          50: `#F2F2F2`,
          100: `#565B73`,
          200: `#D9D9D9`,
          300: `#3A3A3A`,
          400: `#474F62`,
          500: "#FFE08D",
          600: "#F0F0F0",
          700: "#1E1E1E",
          800: "#F5F7FB",
        },
        black: {
          50: "#000",
          100: "#121212",
        },
      },
      backgroundImage: {
        spots: "url('/src/assets/images/hero-section-spots.png')",
        worldmap: "url('/src/assets/images/world-map.png')",
        talent: "url('/src/assets/icons/Rectangle 22.png')",
        circle: "url('/src/assets/icons/ash-circle.png')",
        placeholder: "url('/src/assets/images/woman.png')",
        aboutusdots: "url('/src/assets/images/aboutusdots.png')",
        aboutuscircle: "url('/src/assets/images/circle 5.png')",
        faqhero: "url('/src/assets/images/herobg-faq.png')",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      boxShadow: {
        custom1: "0px 10px 30px rgba(162, 182, 212, 0.15)",
        custom2: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        custom3: "0px 2px 2px rgba(0, 0, 0, 0.25)",
      },
      width: {
        90: "90%",
      },
    },
  },
  plugins: [],
};
