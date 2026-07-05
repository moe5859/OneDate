/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{ts,tsx}',
    './packages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#F46F5B',
        charcoal: '#1E1E1B',
      },
    },
  },
  plugins: [],
};
