module.exports = {

	// Minify HTML
	// https://github.com/gruntjs/grunt-contrib-htmlmin

	build: {
		options: {
			// removeCommentsFromCDATA: true,
			// https://github.com/yeoman/grunt-usemin/issues/44
			// collapseWhitespace: true,
			// collapseBooleanAttributes: true,
			// removeAttributeQuotes: true,
			// removeRedundantAttributes: true,
			// useShortDoctype: true,
			// removeEmptyAttributes: true,
			// removeOptionalTags: true
		},

		files: [{
			expand: true,
			cwd: '<%= temp %>',
			src: '**/*.html',
			dest: '<%= build %>'
		}]
	}

}