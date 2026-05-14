import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        charcoal: "#0b0c0d",
        iron: "#151719",
        chrome: "#c9ced2",
        mist: "#f4f1ea",
        lead: "#7a7f83",
      },
      fontFamily: {
        display: ["Cinzel", "Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "metal-line":
          "linear-gradient(135deg, rgba(245,245,245,.95), rgba(129,137,145,.42) 45%, rgba(250,250,250,.78))",
        "black-depth":
          "radial-gradient(circle at 50% 0%, rgba(165,170,176,.14), transparent 36%), linear-gradient(180deg, #090909 0%, #030303 100%)",
      },
      boxShadow: {
        chrome: "0 0 0 1px rgba(205,211,216,.18), 0 28px 80px rgba(0,0,0,.62)",
      },
    },
  },
  plugins: [],
} satisfies Config;
