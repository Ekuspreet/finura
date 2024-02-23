/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'finuramain':'#59898f',
        'finuradark':'#5f6e78',
        'finuracontrast':'#d7ba8f'
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui(
      {addCommonColors : true,}
    ),
  ],
}