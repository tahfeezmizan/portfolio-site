/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
        Rubik: "'Rubik', sans-serif",
        Anton: "'Anton', sans-serif",
        NotoSans: "'Noto Sans', sans-serif",
      },
      colors: {
        HeaderBG: 'rgb(17, 18, 20)',
        primaryTextColor: 'rgb(255, 89, 90)',
        textColor: 'rgb(138, 139, 140)'
      },
    },
  },
  plugins: [],
}