/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        "custom-orange": "rgba(255, 172, 100, 0.22)",
        "custom-green": "rgba(9, 207, 172, 0.16);",
      },
      textColor: {
        gradient: "var(--gradient-text-color)",
      },
      colors: {
        green: "#09CFAC",
        dark_gray: "#1E1D2F",
        white: "#FFFFFF",
        blue: "#3F74FB",
        black: "#1E1D2F",
        orange: "#F27709",
        gray: "#F2F2F2",
      },
      screens: {
        s: "370px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1536px",
      },
      fontFamily: {
        Denistina: ["Denistina", "Inter", "sans-serif"],
        DrukCyr: ["DrukCyr", "serif"],
      },
    },
  },
};
