module.exports = {

  // Linting your scss with scsslint
  // https://github.com/FWeinb/grunt-scsslint

  options: {
    // config: 'config/.scss-lint.yml', // scsslint will also recognise a .scss-lint.yml file in the sass directory
    include: [
      'ColorKeyword',
      'Comment',
      'DebugStatement',
      'DeclarationOrder',
      'EmptyLineBetweenBlocks'
    ],
    // bundleExec: true
  },

  dist: {
    src: ['<%= src %>/css/**/*.scss', '.tmp/css/*.css'],
  }

  // If this keeps failing just use a grunt-shell command like:
  // bundle exec scss-lint  src/css/**/*.scss -c config/.scss-lint.yml

}