/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

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
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "sans",
          },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
