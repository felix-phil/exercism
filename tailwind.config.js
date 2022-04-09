module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        exercism: {
          50: '#F0F3F9',
          100: '#5C5589',
          200: '#3F3A5A',
          300: '#3D3B45',
          400: '#130B43',
          500: '#3F3A5A',
          600: '#2E57E8',
          shadow: '#E5E5E5',
          active: '#F4F7FD',
          border: '#EAECF3',
          border2: '#C8D5EF',
          badge: '#D85050',
          button: { 100: '#D5D8E4', active: '#E1EBFF', disabled: '#E0E0ED' },
          text: { disabled: '#76709F' },
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
