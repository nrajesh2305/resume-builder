/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 8px rgba(255, 255, 255, 0.35)",
          "0 0px 20px rgba(255, 255, 255, 0.2)",
        ],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Replace default sans if desired
      },
    },
  },
  plugins: [scrollbar],
};
