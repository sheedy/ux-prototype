module.exports = function(grunt) {

	grunt.registerTask('build', [
		'clean:build',
		'assemble:server',
		// 'compass:build',
		'sass:server',
		'copy:pre_concat',
		'grunticon',
		'useminPrepare',
		'concurrent:build',
		'concat',
		// 'cssmin', // 'minify' CSS (use compass' config.rb instead if needed)
		// 'uglify', // minifies but keeps '!' at the start of comments
		'copy:post_concat',
		// 'rev', // revision number in file name
		'usemin',
		'replace', // hack to make up for usemin's inability to resolve relative paths
		'prettify:all',
		'open:build'
	]);

}