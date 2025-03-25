// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this based on your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add the Poppins font
      },
      colors: {
        primary: '#FF8E3C',
        'primary-light': '#FFBD59',
        secondary: '#0080FF',
        dark: '#2C2C2C',
        light: '#F5F7FA',
        border: '#E2E8F0',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
