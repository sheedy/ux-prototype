module.exports = {

	// Run grunt tasks concurrently
	// https://github.com/sindresorhus/grunt-concurrent

	server: [
		'sass:server',
		// 'sassdown',
		'assemble:server'
	],

	build: [
		'imagemin',
		'htmlmin'
	]
}
