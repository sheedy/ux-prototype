'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  var path = require('path');

  // Display task times
  require('time-grunt')(grunt);
  // Load tasks as needed, for better performance
  require('jit-grunt')(grunt, {
    replace:               'grunt-text-replace',
    useminPrepare:         'grunt-usemin',
    scsslint:              'grunt-scss-lint'
  })({
    loadTasks:             './tasks'
  });

  // Split grunt file into 'tasks' and 'task options' for easier maintenance
  // Source: http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), './tasks/options'),      // path to task.js files, defaults to grunt dir
    init: true,                                                   // auto grunt.initConfig
    loadGruntTasks: false,                                        // disable loading tasks (let jit-grunt handle that)
    config: {                                                     // additional config vars
      pkg:                 grunt.file.readJSON('./package.json'), // access fields in package.json for settigns
      projname:            '<%= pkg.name %>',                     // change here or in package.json
      src:                 './src',
      build:               './build',
      temp:                './.tmp',
      bower:               './vendor/bower_components',
      LIVERELOAD_PORT:     35028,
      port:                9003,
      hostname:            '0.0.0.0'                              // enter 'your-host-ip-address:port-number-from-above' into browser address bar for remote livereload
    }
  });

  // verbose logging
  grunt.option('stack', true);

};
