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
        prism: "url('/prism-light-colorful.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fullSpin: "fullSpin 3s linear infinite",
        hero_fadeIn__hoIwO: "1s nomal fade-In",
        slide80: "slide 80s linear infinite",
        slide100: "slide 100s linear infinite",
      },
      keyframes: {
        fullSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        hero_fadeIn__hoIwO: {
          "100%": {
            filter: "blur(0px)",
            opacity: "1",
          },
        },
        slide: {
          '0%': {transform: "translate3d(0,0,0)"},
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
      },
      colors: {
        gray: "#696969",
        textgray: "#666",
        gray75: "rgba(0,0,0,.75)",
        gray05: "rgba(0,0,0,.05)",
        grayshade: "#333",
        gray444: "#444",
        primarybg: "#d0d3d4",
        blue: "#0070f3",
        lightblue: "rgba(211,229,255,.4)",
        white98: "#fafafa",
        white92: "#eaeaea",
      },
      boxShadow: {
        "ex-md-blue": "0 4px 14px 0 rgba(0,118,255,.39)",
        "ex-md-gray": "0 4px 14px 0 rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};
export default config;
