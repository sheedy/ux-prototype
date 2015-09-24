module.exports = {

  // Grunt task to compile Sass SCSS to CSS using libsass/node-sass (FAST!!!)
  // Compass will not work with Libsass
  // https://github.com/sindresorhus/grunt-sass

  options: {

  },

  server: {
    options: {
      style: 'expanded',                  // nested | compact | compressed | expanded
      precision: 6,
      trace: false,
      debugInfo: true,
      lineNumbers: true,
      // banner: "/* Test banner */",     // Can't be used if you use the sourcemap option.
      includePaths: ["<%= bower %>"]
    },

    files: [{
      expand: true,
      cwd: 'src/css',
      src: ['*.scss'],
      dest: '<%= temp %>/css',
      ext: '.css'
    }]
  },

  build: {
      options: {
        style: 'expanded',                  // nested | compact | compressed | expanded
        precision: 6,
        trace: false,
        sourcemap: false,
        debugInfo: false,
        lineNumbers: false,
        // banner: "/* Test banner */",     // Can't be used if you use the sourcemap option.
        includePaths: ["<%= bower %>"]
      },

      files: [{
        expand: true,
        cwd: 'src/css',
        src: ['*.scss'],
        dest: '<%= build %>/css',
        ext: '.css'
      }]
    }

}
