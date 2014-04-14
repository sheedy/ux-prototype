module.exports = {

	// Static file generation from Handlebars templates
	// http://assemble.io/docs/

	options: {
		flatten: true,
		assets: '<%= temp %>',
		data: [
			'<%= src %>/data/*.json',
			'<%= src %>/docs/patterns/**/*.json'
		],
		partials: [
			'<%= src %>/content/partials/**/*.hbs',
			'<%= src %>/docs/patterns/**/*.hbs',
			'<%= src %>/content/layouts/*.hbs'
		],
		layoutdir: 'src/content/templates',
		layout: false,


	},

	// Splitting the targets below don't allow for the dynamic status page list
	// From the docs (http://assemble.io/docs/Collections.html):
	// For any given collection, only items found in the [current target] will be added to the collection by Assemble.
	// For example, if we wish to render a list of all of the pages in the pages collection, we will only see the pages in the "current target".

	// All pages
	server: {
		options: {
			// assets: '<%= temp %>'
		},
		files: {
			'<%= temp %>/': '<%= src %>/content/pages/*.hbs',
			'<%= temp %>/project/rwd/': '<%= src %>/content/pages/project/rwd/*.hbs',
			'<%= temp %>/project/typography/': '<%= src %>/content/pages/project/typography/*.hbs',
		}
	}

}
