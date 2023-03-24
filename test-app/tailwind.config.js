/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          navy: {
            200: "#4634eb",
            100: "#485468",
            50: "#bfd2f2",
          },
        },
      },
      fontFamily: {
        'babylonica': ['Babylonica', 'cursive'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
        'heading': ['Play', 'sans-serif']
      }
    },
  },
  plugins: [],
};
