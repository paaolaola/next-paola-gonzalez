/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#e70e02',
        'primary-red-light': '#f42b03',
        'orange-light': '#e89005',
        'orange-dark': '#ec7505',
        'grey-light': '#f7f5fb',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'bebas': ['Bebas Neue', 'cursive'],
        'edu': ['Edu AU VIC WA NT Hand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
