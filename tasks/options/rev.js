module.exports = {

	// Revision numbers for caching
	// https://github.com/cbas/grunt-rev

	build: {
		files: {
			src: [
				'<%= build %>/js/{,*/}*.js',
				'<%= build %>/css/{,*/}*.css',
				'<%= build %>/css/fonts/*'
			]
		}
	}

}