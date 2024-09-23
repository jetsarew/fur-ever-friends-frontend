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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "very-light-gray": "#E0E0E0",
        "light-gray1": "#CCCCCC",
        "light-gray2": "#D9D9D9",
        "soft-gray": "#B3B3B3",
        "medium-gray": "#999999",
        "standard-gray": "#808080",
        "dark-gray": "#666666",
        "darker-gray": "#4D4D4D",
        "dark": "#333333",
        "bd-gray": "#E5EBEB",
        "bright": {
          "blue": "#1D9BF0",
          "green": "#05CE78",
          "red": "#E54D4D"
        },
        "golden-yellow": "#FFC107",
        "dark-blue": "#FFC107"
      },
      boxShadow: {
        custom: '0px 8px 24px 0px rgba(149, 157, 165, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
