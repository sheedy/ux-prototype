module.exports = {

	// Replaces references to non-optimized scripts or stylesheets
	// into a set of HTML files (or any templates/views)
	// https://github.com/yeoman/grunt-usemin

	options: {
		dirs: ['<%= build %>']
	},

	html: ['<%= build %>/{,*/}*.html'],
	css: ['<%= build %>/css/{,*/}*.css']

}