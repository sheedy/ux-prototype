module.exports = {

  // Compile Sass to CSS using the Compass framework
  // https://github.com/gruntjs/grunt-contrib-compass

  options: {
    config: 'config.rb'
  },

  build: {
    options: {
      cssDir: 'build/css'
    }
  },

  server: {
    options: {
      cssDir: '.tmp/css',
      debugInfo: false
    }
  }

}
