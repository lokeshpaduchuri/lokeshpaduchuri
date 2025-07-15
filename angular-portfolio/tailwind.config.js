const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{html,ts,scss}'
  ],
  darkMode: 'class',
  safelist: [
    {
      pattern: /(bg|text|border)-(zinc|gray|green)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        zinc: colors.zinc,
        gray: colors.gray,
        green: colors.green,
      },
      animation: {
        fade: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
