/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('/src/Images/bg.jpg')",
        'logo': "url('src/Images/discord.png')",
        'background2': "url('https://cemhri.org/wp-content/uploads/2018/04/Home-Four-Banner-Background-Image.png  ')",
      }
    },
  },
  plugins: [],
}