module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      keyframes: {
        mobileMenuAnimation: {
          '0%': { transform: 'h-[0vh]' },
          '20%': { transform: 'h-[20vh]' },
          '40%': { transform: 'h-[40vh]' },
          '60%': { transform: 'h-[60vh]' },
          '80%': { transform: 'h-[80vh]' },
          '100%': { transform: 'h-[100vh]' },
        }
      },
    },
  },
  plugins: [],
}
