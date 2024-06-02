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
        "sorrell-brown": {
          "50": "#f9f7f3",
          "100": "#f1ede3",
          "200": "#e2dac6",
          "300": "#c7b590",
          "400": "#bca37b",
          "500": "#ae8d61",
          "600": "#a17b55",
          "700": "#866448",
          "800": "#6d513f",
          "900": "#594435",
          "950": "#2f221b",
        },
        mondo: {
          "50": "#f7f6ef",
          "100": "#ecebd5",
          "200": "#dad6ae",
          "300": "#c4bc80",
          "400": "#b2a55d",
          "500": "#a3934f",
          "600": "#8c7742",
          "700": "#715c37",
          "800": "#604d33",
          "900": "#443627",
          "950": "#2f2419",
        },
        clover: {
          "50": "#fafee7",
          "100": "#f3fccb",
          "200": "#e5f89e",
          "300": "#d1f165",
          "400": "#bae536",
          "500": "#9ccb17",
          "600": "#79a20e",
          "700": "#5b7b10",
          "800": "#4a6212",
          "900": "#3a4d13",
          "950": "#1f2e05",
        },
      },
      fontFamily: {
        pangaia: ["Pangaia", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        "red-hat-display": ["Red Hat Display", "sans-serif"],
        "google-sans": ["Google Sans", "sans-serif"],
      },
      backgroundImage: ({ theme }) => ({
        "gradient-article": `linear-gradient(90deg, ${theme(
          "colors.sorrell-brown.300"
        )} 50%, ${theme("colors.clover.300")} 50%);`,
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
