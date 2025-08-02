/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        glassgrey: '#1E1E1E',   // custom dark grey
       
      },
    },
  },
  plugins: [],
}
