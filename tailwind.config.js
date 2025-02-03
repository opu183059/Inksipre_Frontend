/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
        playwrite: ["Playwrite IT Moderna", "sans-serif"],
      },
        animation: {
          textColor: "colorChange 0.8s infinite alternate", 
        },
        keyframes: {
          colorChange: {
            "0%, 100%": { color: "red" },
            "50%": { color: "lime" },
          },
        },
    },
  },
  plugins: [],
}

