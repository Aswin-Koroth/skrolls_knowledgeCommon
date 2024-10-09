/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#f36760',
        secondary: '#ffeae9',
        'bg-primary': '#f3f3f3',
        'bg-secondary': '#ffffff',
        'bg-muted': '#f5f5f6',
        'bg-muted-transparent': '#e7e7e740',
        'bg-transparent': '#000000b8',
        'bg-transparent-muted': '#00000066',
        textarea: '#f6f6ff',
        'border-primary': '#a3a3a3',
        'border-muted': '#dddddd',
        'text-primary': '#000000',
        'text-secondary': '#6c757d',
        'text-muted': '#c6c6c6',
        'text-hard': '#3c3c3c',
        shadow: 'rgba(0, 0, 0, 0.05)',
        grey: '#999',
        white: '#fff',
      },
      transitionProperty: {
        padding: 'padding',
        margin: 'margin',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
