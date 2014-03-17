module.exports = {

	// Run tasks whenever watched files change
	// https://github.com/gruntjs/grunt-contrib-watch

	options: {
		livereload: '<%= LIVERELOAD_PORT %>',
		interrupt: false,
		spawn: true,
		dateFormat: function(time) {
			// This returns a "grunt is not defined" error
			// grunt.log.writeln('The watch finished in ' + time + 'ms');
			// grunt.log.writeln('Waiting... Ready for more!');
		}
	},

	data: {
		files: ['<%= src %>/data/*.json'],
		tasks: ['assemble:server']
	},

	js: {
		files: ['<%= src %>/js/{,*/}*.js'],
		tasks: ['copy:js']
	},

	svg: {
		files: ['<%= src %>/images/svg-src/*.svg'],
		tasks: [
			'grunticon',
			'copy:svg_build'
		]
	},

	images: {
		files: ['<%= src %>/images/{!(svg-build),**}/**'],
		tasks: ['newer:copy:images']
	},

	coffee: {
		files: ['<%= src %>/js/{,*/}*.coffee'],
		tasks: ['coffee:build']
	},

	coffeeTest: {
		files: ['test/spec/{,*/}*.coffee'],
		tasks: ['coffee:test']
	},

	// compass: {
	// 	files: ['<%= src %>/css/**/*.{scss,sass}'],
	// 	tasks: ['compass:server']
	// },

	sass: {
		files: ['<%= src %>/css/**/*.{scss,sass}'],
		tasks: ['sass:server']
	},

	pages_all: {
		files: ['<%= src %>/templates/**/*.hbs'],
		tasks: ['assemble:server']
	}

}
