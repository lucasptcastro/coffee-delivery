import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Produto
        yellow: "#DBAC2C",
        "yellow-dark": "#C47F17",
        "yellow-light": "#F1E9C9",

        purple: "#8047F8",
        "purple-dark": "#4B2995",
        "purple-light": "#EBE5F9",

        // Base
        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574F4D",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",

        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
        "base-card": "#F3F2F2",
        "base-background": "#FAFAFA",
        "base-white": "#FFFFFF",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        baloo2: "var(--font-baloo2)",
      },
      screens: {
        xs: "376px",
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
export default config;
