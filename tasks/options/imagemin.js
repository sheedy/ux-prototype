module.exports = {

  // Minify PNG and JPEG images
  // https://github.com/gruntjs/grunt-contrib-imagemin

  build: {
    files: [{
      expand: true,
      cwd: '<%= src %>/images',
      src: '{,*/}*.{png,jpg,jpeg,gif}',
      dest: '<%= build %>/images'
    }]
  },

  server: {
    files: [{
      expand: true,
      cwd: '<%= src %>/images',
      src: '{,*/}*.{png,jpg,jpeg,gif}',
      dest: '<%= temp %>/images'
    }]
  }

}