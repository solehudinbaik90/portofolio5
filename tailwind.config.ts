import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "rgb(255 1 79)",
        card: "rgb(29 28 34)",
        btn: "rgb(41 40 45)",
        text: "rgb(196 207 222)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
