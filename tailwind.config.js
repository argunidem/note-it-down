/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'bluish-gray': {
          100: '#3a5385',
          200: '#2e3c5d',
          300: '#323f5c',
          400: '#2e3e63',
          500: '#364a75',
        },
        'blue-1000': '#2b4887',
      },
    },
  },
  plugins: [],
};
