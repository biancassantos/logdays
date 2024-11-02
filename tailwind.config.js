/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent" : "#B9DA7B",
        "dark-gray": "#E2E2E2",
        "light-gray": "#ECECEC",
        "gray-detail": "#D4D4D4"
      },
      fontFamily: {
        "handwritten": ["Patrick Hand SC"]
      }
    },
  },
  plugins: [],
}

