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
        earth: "hsl(var(--earth))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        newsreader: ["var(--font-newsreader)"],
      },
      backgroundImage: {
        terra:
          "url('https://ik.imagekit.io/GreenEconomy/Home/terra.webp?updatedAt=1719091888531')",
        bemvindo:
          "url('https://ik.imagekit.io/GreenEconomy/Home/banner.webp?updatedAt=1719091889061')",
        terraMobile:
          "url('https://ik.imagekit.io/GreenEconomy/Home/terra-mobile.webp?updatedAt=1719091887954')",
        bemvindoMobile:
          "url('https://ik.imagekit.io/GreenEconomy/Home/banner-mobile.webp?updatedAt=1719091888470')",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
