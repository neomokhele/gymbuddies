import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville", "serif"], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          1: "#202124",
        }
      },
    },
  },
  plugins: [],
};
export default config;
