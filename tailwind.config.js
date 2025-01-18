/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#080C17",
        "btn-color": "#EED1AC",
        "color-black": "#16191E",
        "color-white": "#F4F4F4",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        // body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
