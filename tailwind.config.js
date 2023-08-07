/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'custom-gradient': '#f8714f',
        'custom-gradient-alt': '#f28a36',
        'custom-gradient-alt-2': '#190401',
      },

    },
  },
  plugins: [],
}