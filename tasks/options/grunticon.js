module.exports = {

  // Takes a folder of SVG/PNG files and outputs them to CSS
  // in 3 formats: svg data urls, png data urls, and a fallback
  // CSS file with references to regular png images
  // https://github.com/filamentgroup/grunticon

  myIcons: {

    options: {

    },

    files: [{
      expand: true,
      cwd: '<%= src %>/images/svg/',
      src: ['*.svg'],
      dest: "<%= src %>/images/svg-build/"
    }]
  }
}