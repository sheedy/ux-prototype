module.exports = {

	// Generates styleguides from Markdown comments in CSS,
	// SASS and LESS files using Handlebars
	// https://github.com/nopr/sassdown

	styleguide: {
			options: {
				assets: [
					'.tmp/css/**/*.min.css',
					'.tmp/js/*.min.js',
					'http://use.typekit.net/sea5yvm.js',
				],
				theme: 'src/docs/styleguide/theme.css',
				template: 'src/docs/styleguide/template.hbs',
				// readme: 'src/assets/sass/readme.md',
				highlight: 'monokai',
				excludeMissing: false
			},
			files: [{
				expand: true,
				cwd: 'src/css',
				src: [
					// 'base/**/*.{scss,sass}',
					// 'generic/**/*.{scss,sass}',
					'objects/**/*.{scss,sass}'
				],
				dest: '.tmp/docs/styleguide/'
			}]
		}

}