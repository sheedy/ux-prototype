module.exports = {

	// Beautify output html
	// https://github.com/jonschlinkert/grunt-prettify

	options: {
		indent: 1,
		indent_char: "\t",
		// padcomments: true,
		preserve_newlines: true,
		max_preserve_newlines: 1,
		condense: false,
		prettifyrc: 'config/prettify.prettifyrc'
	},
	all: {
		expand: true,
		cwd: 'build/',
		src: ['**/*.html'],
		dest: 'build/'
	}

}