module.exports = {

	// Accessibility linting
	// https://github.com/globant-ui/arialinter

	files: [
		'<%= temp %>/**/*.html',
	],
	options: {
		templates: false,
		levels: 'A'
	}

}
