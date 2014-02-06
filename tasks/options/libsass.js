module.exports = {

	// Grunt task to compile Sass SCSS to CSS using libsass/node-sass
	// https://github.com/sindresorhus/grunt-sass

	dist: {                             // Target
		files: {                        // Dictionary of files
			'main.css': 'main.scss'     // 'destination': 'source'
		}
	},
	dev: {                              // Another target
		options: {                      // Dictionary of render options
			includePaths: [
			'path/to/imports/'
			]
		},
		files: {
			'main.css': 'main.scss'
		}
	}

}
