/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vibes': ['Great Vibes', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'forum': ['Forum', 'cursive']

      },
      colors: {
        'primary': '#75c7dd',
        'secondary': 'rgb(253, 201, 2)'
      }
    },
  },
  plugins: [require("daisyui")],
}

