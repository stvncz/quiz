/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte}'],
    theme: {
      extend: {
        colors: {
          'dark-bg': '#121212',
          'dark-text': '#eaeaea',
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  }
  
  