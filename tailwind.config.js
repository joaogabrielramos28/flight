/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      height:{
        '180':'45rem'
      },
      width:{
        '180':'45rem'
      },
      colors:{
        "primary":"#31bb9b",
        "secondary":"#ff784b"
      }
     
    },
  },
  plugins: [],
}

