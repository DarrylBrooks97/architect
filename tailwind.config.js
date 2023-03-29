/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        onload: 'onloadKeyFrame 3s ease-in-out forwards',
        afterload: 'afterLoadKeyFrame 3s forwards',
      },
      keyframes: {
        afterLoadKeyFrame: {
          '0%': {
            display: 'none',
            opacity: '0',
            animationDelay: '10s',
            transform: 'translateY(-100px)',
          },
          '100%': { display: 'block', opacity: '1', transform: 'translateY(0px)' },
        },
        onloadKeyFrame: {
          '0%': { opacity: '0', display: 'none', transform: 'translateY(0px)' },
          '50%': { opacity: '1', transform: 'translateY(-100px)' },
          '100%': {
            opacity: '0',
            display: 'none',
            transform: 'translateY(-200px)',
            animationDelay: '2s',
          },
        },
      },
    },
  },
  plugins: [],
};
