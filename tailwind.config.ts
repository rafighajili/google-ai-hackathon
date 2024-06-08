import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: { center: true, padding: "1.5rem", screens: { xl: "1024px" } },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: { primary: { DEFAULT: "#11C7F2", foreground: "#FFFFFF" }, focus: "#11C7F2" },
        },
        dark: {
          colors: { primary: { DEFAULT: "#11C7F2", foreground: "#000000" }, focus: "#11C7F2" },
        },
      },
    }),
  ],
};

export default config;
