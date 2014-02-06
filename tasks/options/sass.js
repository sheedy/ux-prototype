module.exports = {

	// Grunt task to compile Sass SCSS to CSS
	// https://github.com/gruntjs/grunt-contrib-sass

	options: {							// Target options
		style: 'expanded'
	},

	server: {								// Target
		options: {							// Target options

		},
		files: [{
			expand: true,
			cwd: 'src/css',
			src: ['*.scss'],
			dest: '<%= temp %>/css',
			ext: '.css'
		}]
	},

	build: {									// Target
		files: [{
			expand: true,
			cwd: 'src/css',
			src: ['*.scss'],
			dest: '<%= build %>/css',
			ext: '.css'
		}]
	}

}
