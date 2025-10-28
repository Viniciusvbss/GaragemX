/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'garage-start': '#11998e',
        'garage-end': '#38ef7d',
      },
      backgroundImage: {
        'garage-gradient': 'linear-gradient(to right, #11998e, #38ef7d)',
        'garage-gradient-to-r': 'linear-gradient(to right, #11998e, #38ef7d)',
        'garage-gradient-to-br': 'linear-gradient(to bottom right, #11998e, #38ef7d)',
        'garage-gradient-to-b': 'linear-gradient(to bottom, #11998e, #38ef7d)',
        'garage-gradient-to-bl': 'linear-gradient(to bottom left, #11998e, #38ef7d)',
        'garage-gradient-to-l': 'linear-gradient(to left, #11998e, #38ef7d)',
        'garage-gradient-to-tl': 'linear-gradient(to top left, #11998e, #38ef7d)',
        'garage-gradient-to-t': 'linear-gradient(to top, #11998e, #38ef7d)',
        'garage-gradient-to-tr': 'linear-gradient(to top right, #11998e, #38ef7d)',
      },
    },
  },
  plugins: [],
}
