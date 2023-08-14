/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: '#D0A85C',
        cyan: '#0ED4FF',
        bg: '#030608'
      },
      fontFamily: {
        primary: 'LoL',
        secondary: 'Poppins'
      },
      
    },
  },
  plugins: [],
}

