module.exports = {

  // Linting your scss with scsslint
  // https://github.com/FWeinb/grunt-scsslint

  options: {
    config: '.scss-lint.yml', // scsslint will also recognise a .scss-lint.yml file in the sass directory
    // reporterOutput: 'scss-lint-report.xml',
    colorizeOutput: true,
    bundleExec: true,
    // emitError: true
  },


  files: ['<%= src %>/css/**/*.scss'],


  // If this keeps failing just use a grunt-shell command like:
  // bundle exec scss-lint  src/css/**/*.scss -c config/.scss-lint.yml

}