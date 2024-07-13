import { wedgesTW } from "@lemonsqueezy/wedges";

// const { wedgesTW  = require("@lemonsqueezy/wedges");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      animation: {
        'slide-up': 'slide-up 1s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },

  
  plugins: [
    wedgesTW({
      prefix: "wg", // prefix used for CSS variables
      defaultTheme: "light", // default theme
      defaultExtendTheme: "light", // default theme to extend when creating custom themes
      fontSmooth: "antialiased", // specify font smoothing for Wedges components
      themes: {
        light: {
          colors: {}, // light themable colors
        },
        dark: {
          colors: {}, // dark themable colors
        },
        // ... custom themes
      },
    }),

    ],
}

