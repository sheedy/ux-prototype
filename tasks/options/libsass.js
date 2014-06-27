module.exports = {

  // Grunt task to compile Sass SCSS to CSS using libsass/node-sass (FAST!!!)
  // Compass will not work with Libsass
  // https://github.com/sindresorhus/grunt-sass

  server: {
    options: {
      includePaths: ['path/to/imports/']
    },

    files: {
      'main.css': 'main.scss'
    }
  },

  build: {
    files: {
      'main.css': 'main.scss'
    }
  }

}
