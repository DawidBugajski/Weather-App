/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '799px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        LightCyan: 'hsl(193, 38%, 86%)',
        NeonGreen: 'hsl(150, 100%, 66%)',
        GrayishBlue: 'hsl(217, 19%, 38%)',
        DarkGrayishBlue: 'hsl(217, 19%, 24%)',
        DarkBlue: 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        kanit: 'Kanit',
      },
    },
  },
  plugins: [],
};
