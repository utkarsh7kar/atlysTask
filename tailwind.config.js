module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3182CE',
          secondary: '#6366F1',
          accent: '#FFC400',
          neutral: '#6B7280',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Libre Baskerville', 'serif'],
        },
      },
    },
    plugins: [
        require('@tailwindcss/forms'),  // Add this line
      ],
  };