/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Added jsx & tsx support
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('./images/ecg.webp')", // Fixed object syntax & URL
      },
    },
  },
  plugins: [],
};
