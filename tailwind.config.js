/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#f2f2f2",
          hover: "#e5e5e5",
          border: "#d3d3d3",
          text: "#606060",
          dark: "#0f0f0f",
          ["dark-hover"]: "#030303",
        },
      },
    },
  },
  plugins: [],
};
