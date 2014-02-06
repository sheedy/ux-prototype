module.exports = {

	// Run grunt tasks concurrently
	// https://github.com/sindresorhus/grunt-concurrent

	server: [
		// 'coffee:build',
		'sass:server',
		'assemble:server'
	],
	test: [
		// 'coffee'
	],
	build: [
		// 'coffee',
		// 'compass',
		// 'sass:build',
		'imagemin',
		'htmlmin'
	]
}
