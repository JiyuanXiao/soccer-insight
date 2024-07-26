import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "1/12": "8.33%",
        "2/12": "16.66%",
        "3/12": "25%",
        "4/12": "33.33%",
        "5/12": "41.66%",
        "6/12": "50%",
        "7/12": "58.33%",
        "8/12": "66.66%",
        "9/12": "75%",
        "10/12": "83.33%",
        "11/12": "91.66%",
      },
      screens: {
        tall: { raw: "(min-height: 890px)" },
        xtall: { raw: "(min-height: 1024px)" },
      },
    },
  },
  plugins: [],
};
export default config;
