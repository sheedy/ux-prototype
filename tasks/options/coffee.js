module.exports = {

  // Coffeescript
  // https://github.com/gruntjs/grunt-contrib-coffee

  build: {
    files: [{
      expand: true,
      cwd: '<%= src %>/js',
      src: '{,*/}*.coffee',
      dest: '.tmp/js',
      ext: '.js'
    }]
  },

  test: {
    files: [{
      expand: true,
      cwd: 'test/spec',
      src: '{,*/}*.coffee',
      dest: '.tmp/spec',
      ext: '.js'
    }]
  }

}