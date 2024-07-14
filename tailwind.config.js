module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#E6F0FF',
          // ... add other shades if needed
          400: '#60A5FA', // Added for dark mode cursor
          500: '#3B82F6', // Added for light mode cursor
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      cursor: {
        none: 'none',
      },
      zIndex: {
        '60': '60',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Added to support dark mode
}