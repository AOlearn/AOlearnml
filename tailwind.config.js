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
        primary: '#3B82F6',
        'primary-light': '#60A5FA',
        secondary: '#1E40AF',
        dark: '#1F2937',
        light: '#F9FAFB',
        border: '#E2E8F0',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-blue': 'pulse-blue 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-blue': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 0.9 },
        },
      },
    },
  },
  plugins: [],
};
