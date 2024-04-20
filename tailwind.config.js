/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage:{
    
      "hero":"url(/public/homebg.jpg)"
    },
    backgroundColor:{
      "bgcolor":["EB7979"]
    },
    fontFamily:{
      "fontRoboto":['Roboto'],
      "popins":['Poppins'],
      "lato":['Lato'],
      "roberto":['Roboto Condensed']

    },
    extend: {},
  },
  plugins: [],

}

