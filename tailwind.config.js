export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "rgb(var(--fg) / <alpha-value>)",
        snow: "#FFFFFF",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          deep: "rgb(var(--ink-deep) / <alpha-value>)",
          card: "rgb(var(--ink-card) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "#EB542F",
          hover: "#F2673F",
        },
        muted: "rgb(var(--muted) / <alpha-value>)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px var(--shadow)",
      },
    },
  },
  plugins: [],
};
