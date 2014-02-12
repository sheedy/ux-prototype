module.exports = {

	// Open urls and files
	// https://github.com/jsoverson/grunt-open

	server: {
		path: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>'
	},
	build: {
		path: 'http://<%= connect.options.hostname %>/<%= projname %>/<%= build %>'
	}

}