/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        sky: "#3498db",
        yellow: "#f1c40f",
        dark: "#333",
        light: "#f7f7f7",
      },
      fontFamily: {
        display: ["poppins", "sans sarif"],
        body: ["inter", "sans sarif"],
      },
    },
  },
  plugins: [],
};
