module.exports = {

	// Replaces references to non-optimized scripts or stylesheets
	// into a set of HTML files (or any templates/views)
	//
	// Usually, useminPrepare is launched first, then the steps of the
	// transformation flow (for example, concat, uglify, and cssmin),
	// and then, in the end the usemin task is launched.
	//
	// https://github.com/yeoman/grunt-usemin
	//
	// Watch out for blocks that use an alternate search path like the one below:
	// <!-- build:css({.tmp,src}) ../build/css/styles.css -->
	//
	// This can be set relative to a root:
	// options: {
	//   root: 'app'
	//   dest: 'dist'
	// }
	//
	// Reference
	// https://github.com/yeoman/grunt-usemin/issues/195
	// https://github.com/yeoman/grunt-usemin/issues/133
	// http://stackoverflow.com/questions/15746952/grunt-usemin-with-templates

	html: ['<%= temp %>/**/*.html'],
	options: {
		dest: '<%= build %>',
		flow: {
			html: {
				steps: {
					'js': ['concat'],
					'css': ['concat']},
					post: {}
			}
		}
	}
}
