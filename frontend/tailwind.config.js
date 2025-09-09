/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      emoji: [
        "Noto Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Arial Unicode MS",
        "sans-serif",
      ],
      icon: ["Material Icons", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2b6faf",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "80rem",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "sans",
          },
        },
      },
    },
  },
};
