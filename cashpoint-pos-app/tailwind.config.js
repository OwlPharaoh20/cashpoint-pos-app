const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths based on your file structure
  ],
  darkMode: 'class', // Enable dark mode with class
  theme: {
    extend: {
      colors: {
        primary: '#252422', // Dark Brown
        secondary: '#EB5E28', // Vibrant Orange
        background: '#FFFCF2', // Off-white
        textPrimary: '#403D39', // Dark Gray
        textSecondary: '#CCC5B9', // Light Gray
        dark: {
          bg: '#1E1E1E', // Dark Gray for Dark Mode
          card: '#2D2D2D', // Card background for Dark Mode
          text: '#FFFFFF', // Text color for Dark Mode
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ['32px', '1.2'], // Dashboard Titles
        h2: ['24px', '1.3'], // Section Titles
        h3: ['20px', '1.4'], // Subtitles
        body: ['16px', '1.5'], // Body Text
        label: ['14px', '1.6'], // Labels
      },
      borderRadius: {
        small: '4px',
        card: '8px',
        full: '9999px', // Fully rounded for buttons
      },
    },
  },
  plugins: [],
};
