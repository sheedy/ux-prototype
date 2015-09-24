// Livereload
// https://github.com/gruntjs/grunt-contrib-connect

module.exports = {

  options: {
    port: '<%= port %>',
    hostname: '<%= hostname %>'
  },

  livereload: {
    options: {
      base: '.tmp'
    }
  }/*,

  build: {
    options: {
      base: '<%= build %>',
    }
  }*/

}
