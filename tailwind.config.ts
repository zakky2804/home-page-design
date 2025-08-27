import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neural/": {
          white: "#ffffff",
          d_gray: "#4D4D4D",
          gray: "#717171",
        },
        brand: {
          primary: "#4CAF4F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
