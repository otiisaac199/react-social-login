/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-col": "rgba(102, 16, 83, 0.69)",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
