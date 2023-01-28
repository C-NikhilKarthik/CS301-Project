/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('/src/Images/bg.jpg')",
        'logo': "url('src/Images/discord.png')",
      }
    },
  },
  plugins: [],
}