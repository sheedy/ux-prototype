module.exports = {

	// Sorting CSS properties in specific order
	// https://github.com/csscomb/grunt-csscomb
	//
	// Rule options for csscomb.json can be found here:
	// https://github.com/csscomb/csscomb.js

	build: {
		options: {
			config: 'config/csscomb.json'
		},
		files: {
			'.tmp/css/resorted-responsive-testing.css': ['.tmp/css/responsive-testing.css'],
		}
	}
}