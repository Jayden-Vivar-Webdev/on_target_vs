/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './index.html', // Path to your HTML files
    './**/*.html', // All HTML files in your project
    './src/**/*.{js,jsx,ts,tsx}', // If you're using React or similar JS frameworks
  ],
  theme: {
    extend: {
      colors: {
        'theme-colour': '#39FF14',
        'dark-green': '#0A2900',
        'black-ops': '#0A0A0A',
        'tactical-gray': '#1A1A1A',
      },
      fontFamily: {
        'sans': ['"Rajdhani"', 'sans-serif'],
        'mono': ['"Major Mono Display"', 'monospace'],
      },
    },
  },
  plugins: [],
}
