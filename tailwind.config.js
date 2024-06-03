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
      },
      fontFamily: {
        poppins: ["var(--font-poppins), sans-serif"],
        newsreader: ["Newsreader, serif"],
      },
      backgroundImage: {
        folhas: "url('src/assets/home/banner.jpg ')",
        bemvindo: "url('src/assets/home/banner.jpg ')",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
