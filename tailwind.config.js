/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        'base': "#242537",
        'base-1': "#232639"
      }
    },
  },
  plugins: [],
}

