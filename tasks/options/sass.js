module.exports = {

	// Grunt task to compile Sass SCSS to CSS
	// https://github.com/gruntjs/grunt-contrib-sass

	server: {								// Target
		options: {							// Target options
			style: 'expanded', // nested | compact | compressed | expanded
			precision: 6,
			trace: false,
			sourcemap: false,
			debugInfo: false,
			lineNumbers: false,
			loadPath: ["src/bower_components"],
			// require: "susy",
			bundleExec: false,
			// banner: "/* Test banner */", // Can't be used if you use the sourcemap option.
		},
		files: [{
			expand: true,
			cwd: 'src/css',
			src: ['*.scss'],
			dest: '<%= temp %>/css',
			ext: '.css'
		}]
	},

	build: {
		options: {							// Target options
			style: 'expanded', // nested | compact | compressed | expanded
			precision: 6,
			trace: true,
			sourcemap: false,
			debugInfo: false,
			lineNumbers: false,
			loadPath: ["src/bower_components"],
			// require: "susy",
			bundleExec: false,
			// banner: "/* Test banner */", // Can't be used if you use the sourcemap option.
		},
		files: [{
			expand: true,
			cwd: 'src/css',
			src: ['*.scss'],
			dest: '<%= build %>/css',
			ext: '.css'
		}]
	}

}
