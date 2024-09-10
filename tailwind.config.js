/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        red: '#E76F51', // fall
        orange: '#F4A261', // fall accent
        yellow: '#E9C46A', // summer
        green: '#2A9D8F', // spring
        'green-accent': '#9cf0d6', // spring accent
        blue: '#264653', // winter
        'blue-accent': '#cbf3f0', // winter accent
        purple: '#7209b7',
        neutral: '#f4f1de' // summer accent
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}
