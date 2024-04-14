/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f0652b',
        'secondary': '#000000'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bus.jpg')",
      },
    
    },
  },
  plugins: [
    require("tailwindcss-animate"),
   plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-overlay': {
          'background': 'linear-gradient(var(--overlay-angle, 0deg), var(--overlay-colors)), var(--overlay-image)',
          'background-position': 'center',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          
        },
      });
    }),],
}

