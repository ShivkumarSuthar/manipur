/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{jsx,js}",
"./src/**/*.{jsx,js}" ],
  
  theme: {
    extend: {
      fontFamily:{
        Raleway:"Raleway",
        Montserrat:"Montserrat",
        Playfair: "Playfair Display",
        Poppins:"Poppins",
        
      }
    },
  },
  plugins: [],
}

