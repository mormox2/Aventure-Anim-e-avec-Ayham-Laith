/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        changa: ["Changa", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        cartoon: "4px 4px 0px 0px #2D3748",
        "cartoon-lg": "8px 8px 0px 0px #2D3748",
        "cartoon-sm": "2px 2px 0px 0px #2D3748",
      },
    },
  },
  plugins: [],
};

