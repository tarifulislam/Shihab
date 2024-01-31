/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily : {
        nunito : ["Nunito"]
      }
    },
  },
  plugins: [require("daisyui")],
}

