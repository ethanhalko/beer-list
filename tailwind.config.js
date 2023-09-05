/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
        height: 'height'
      }
    },
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  plugins: [],
};
