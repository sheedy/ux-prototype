module.exports = {

	// Validate JS
	// https://github.com/gruntjs/grunt-contrib-jshint

	options: {
		jshintrc: 'config/jshint.jshintrc',
		reporter: require('jshint-stylish') // use stylish for reporting
	},
	target: [
		'Gruntfile.js',
		'<%= src %>/js/{,*/}*.js',
		'!<%= src %>/js/vendor/*',
		'test/spec/{,*/}*.js'
	]

}