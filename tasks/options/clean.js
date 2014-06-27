module.exports = {

  // Clean/delete out directories and/or their contents
  // https://github.com/gruntjs/grunt-contrib-clean

  build: {
    files: [{
      dot: true,
      src: [
        '<%= temp %>/*',
        '<%= build %>/*',
        '!<%= build %>/.git*' // if you want to keep build directory under version control
      ]
    }]
  },

  server: '.tmp'
}