/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
   theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        deca: ["Lexend Deca", "Inter", "sans-serif"],
        app: ["Homemade Apple", "cursive"],
        out: ["Outfit", "Inter", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      primary: colors.orange,
      secondary: colors.purple,
      tertiary:colors.yellow
    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}