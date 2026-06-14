import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        vg: "#5416FF",
        purpleVG: "#7135e5",
        lilacVG: "#a991ff",
        crestVG: "#4F19DB",
      },
      fontFamily: {
        clash: ['"Clash Display"', "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
