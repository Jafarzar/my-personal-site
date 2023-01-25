/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        share: ["Share", "cursive"],
      },
      animation: {
        shake: "shake 2s ease-in-out infinite",
        shake2: "shake2 2s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shake2: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};
