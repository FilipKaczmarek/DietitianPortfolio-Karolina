module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        showNavList: "showNavList 3s ease",
        hideNavList: "hideNavList 1.5s ease",
        menuList: "all 3s ease",
      },
      keyframes: {
        showNavList: {
          "0%": { height: "0vh" },
          "100%": { height: "100vh" },
        },
        hideNavList: {
          "0%": { height: "100vh" },
          "50%": { color: "white" },
          "100%": { height: "0vh", color: "white" },
        },
      },
    },
  },
  plugins: [],
};
