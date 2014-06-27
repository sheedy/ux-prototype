module.exports = {

  // Grunt task to compile Sass SCSS to CSS
  // https://github.com/gruntjs/grunt-contrib-sass

  server: {
    options: {
      style: 'expanded',                  // nested | compact | compressed | expanded
      precision: 6,
      trace: false,
      sourcemap: true,
      debugInfo: true,
      lineNumbers: true,
      loadPath: ["<%= bower %>"],
      // require: "susy",
      bundleExec: true,
      // banner: "/* Test banner */",     // Can't be used if you use the sourcemap option.
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
      loadPath: ["<%= bower %>"],
      // require: "susy",
      bundleExec: true,
      // banner: "/* Test banner */",     // Can't be used if you use the sourcemap option.
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
