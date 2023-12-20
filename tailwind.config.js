/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'poppins': ['Poppins']
      },
      screens: {
        'es': '410px',
        
      },


    },
  },
  plugins: [require("daisyui")],
}