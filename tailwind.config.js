/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0652b",
        secondary: "#102751",
        hover: "#ae5128",
        borderColor: "#575757",
        warning: "#f3d0d0",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bus.jpg')",
      },
      boxShadow: {
        "custom-shadow": "8px 6px 30px rgba(5, 8, 22, 0.1)",
        "mobile-shadow": "-8px 6px 30px rgba(5, 8, 22, 0.1)",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      animation: {
        "error-animation": "fadeIn .4s linear forwards",
        "line-animation": "bottomLine 2s linear forwards",
        loader: "loader 1s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-overlay": {
          background:
            "linear-gradient(var(--overlay-angle, 0deg), var(--overlay-colors)), var(--overlay-image)",
          "background-position": "center",
          "background-size": "cover",
          "background-repeat": "no-repeat",
        },
      });
    }),
  ],
};
