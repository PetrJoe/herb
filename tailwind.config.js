/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about/index.html",
    "./catalog/index.html",
    "./contact/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}