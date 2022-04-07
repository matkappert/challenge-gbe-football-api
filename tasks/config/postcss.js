/**
 * `tasks/config/postcss`
 *
 * ---------------------------------------------------------------
 *
 * Tailwind CSS works by scanning all of your HTML files, JavaScript components,
 * and any other templates for class names,
 * generating the corresponding styles and then writing them to a static CSS file.
 *
 * For more information, see:
 *   https://tailwindcss.com/docs/installation/using-postcss
 *
 */
module.exports = function (grunt) {
  grunt.config.set('postcss', {
    options: {
      map: true,
      processors: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer')()
      ],
      failOnError: true,
    },
    dist: {
      expand: true,
      cwd: 'assets/styles/tailwindcss',
      src: ['tailwind.css'],
      dest: '.tmp/public/styles',
      ext: '.css',
    },
  });

  grunt.loadNpmTasks('@lodder/grunt-postcss');
};
