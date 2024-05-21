/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {

      fontFamily: {
        poppins: ["var(--font-poppins), sans-serif"],
      },
    },
  },
  plugins: [],
}

