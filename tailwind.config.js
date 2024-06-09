import tailwindcssAnimate from "tailwindcss-animate";

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
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        destructive: "hsl(var(--destructive))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        link: "hsl(var(--link))",
        terra: "hsl(var(--terra))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        newsreader: ["var(--font-newsreader)"],
      },
      backgroundImage: {
        terra: "url('../src/assets/home/terra.jpeg')",
        bemvindo: "url('../src/assets/home/banner.jpg')",
        terraMobile: "url('../src/assets/home/terra-mobile.jpg')",
        bemvindoMobile: "url('../src/assets/home/banner-mobile.jpg')",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
