/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
            translate: {
        'button-icon': 'calc(100% - 3rem)', // bouton moins largeur icône
      }
    },
  },
  plugins: [],
};
