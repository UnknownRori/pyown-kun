/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'sm': '240px',
        'md': '640px',
        'lg': '800px',
        'xl': '1024px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};

