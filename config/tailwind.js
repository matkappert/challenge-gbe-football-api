/**
 * Tailwind CSS
 *
 * For more information on configuring, check out:
 * https://tailwindcss.com/docs/configuration
 */

module.exports = {
  content: [
    './views/pages/**/*.ejs',
    './views/partials/**/*.ejs',
    './assets/js/components/**/*.js',
    './assets/js/pages/**/*.js',
    './assets/styles/pages/**/*.less',
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
