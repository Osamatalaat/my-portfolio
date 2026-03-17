/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#f59e0b",
        danger: "#ef4444",
        darkBlue: "#0f172a"
      }
    },
  },
  plugins: [],
}
