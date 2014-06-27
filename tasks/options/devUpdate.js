module.exports = {

  main: {
    options: {
      updateType: 'report',       // just report
      reportUpdated: false,       // don't report ok packages by default
      packages: {                 // what packages to check
        devDependencies: true,    // only devDependencies by default
        dependencies: false
      },
      packageJson: null           // by deafult - use matchdep default findup to locate package.json
    }
  }
}
