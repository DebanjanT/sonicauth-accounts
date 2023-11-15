import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          "0%": { transform: " translateX(0) scaleX(0)" },
          "40%": { transform: "translateX(0) scaleX(0.4)" },
          "100%": { transform: "translateX(100%) scaleX(0.5)" },
        },
      },
      transformOrigin: {
        "left-right": "0% 50%",
      },
      animation: {
        progress: "progress 1s infinite linear",
      },
      colors: {
        blueGray: "#47414d",
        darkBlueGray: "#1c1523",
        cardBorder: "#303030",
        lightBlueGray: "#a5a5a5",
        lightBtnGray: "#484848",
        orangeBtn: "#a667e5",
        orangeBtnHover: "#b781ea",
        inputBg: "#282828",
        inputBorder: "#4E4E4E",
        navBg: "#2f233a",
        primary100: "#6d00d4",
        primary200: "#8230da",
        primary300: "#954ddf",
        primary400: "#a667e5",
        primary500: "#b781ea",
        primary600: "#c69aee",
        surface100: "#121212",
        surface200: "#282828",
        surface300: "#3f3f3f",
        surface400: "#575757",
        surface500: "#717171",
        surface600: "#8b8b8b",
        surfaceMixed100: "#1c1523",
        surfaceMixed200: "#312a38",
        surfaceMixed300: "#47414d",
        surfaceMixed400: "#5f5964",
        surfaceMixed500: "#78727c",
        surfaceMixed600: "#918d95",
        complementary: "#B4EA81",
        complementaryDark: "#76ce22",
        complementaryDarker: "#5ea51b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
