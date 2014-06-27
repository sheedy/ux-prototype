module.exports = {

  // Grunt plugin for automating all the release steps of your node lib
  // or bower component, with optional publishing to npm.
  // https://github.com/geddski/grunt-release

  options: {
    bump: false,                                // default: true
    file: 'package.json',                       // default: package.json
    add: false,                                 // default: true
    commit: false,                              // default: true
    tag: false,                                 // default: true
    push: false,                                // default: true
    pushTags: false,                            // default: true
    npm: false,                                 // default: true
    npmtag: true,                               // default: no tag
    folder: 'folder/to/publish/to/npm',         // default project root
    tagName: '<%= version %>',                  // default: '<%= version %>'
    commitMessage: 'release <%= version %>',    // default: 'release <%= version %>'
    tagMessage: 'Version <%= version %>',       // default: 'Version <%= version %>',
    github: {
      // repo: 'geddski/grunt-release',         // put your user/repo here
      // usernameVar: 'GITHUB_USERNAME',        // ENVIRONMENT VARIABLE that contains Github username
      // passwordVar: 'GITHUB_PASSWORD'         // ENVIRONMENT VARIABLE that contains Github password
    }
  }
}
