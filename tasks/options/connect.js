// Livereload
// https://github.com/gruntjs/grunt-contrib-connect

var lrSnippet = require('connect-livereload')(
  {
    // connect-livereload specific options
    port: 35028
  }
);

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = {

  options: {
    port: '<%= port %>',
    hostname: '<%= hostname %>'
  },

  livereload: {
    options: {
      middleware: function (connect) {
        return [
          lrSnippet,
          mountFolder(connect, '.tmp'),
          mountFolder(connect, '<%= src %>'),
          mountFolder(connect, '.')
        ];
      }
    }
  },

  build: {
    options: {
      middleware: function (connect) {
        return [
          mountFolder(connect, '<%= build %>')
        ];
      }
    }
  }

}
