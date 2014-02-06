module.exports = {

	// Validate html files with htmlhint
	// https://github.com/yaniswang/grunt-htmlhint
	//
	// Available rules can be found here:
	// https://github.com/yaniswang/HTMLHint/wiki/Rules

	options: {
		// htmlhintrc: '.htmlhintrc',
		'tag-pair': true,
		// Force tags to have a closing pair
		'tagname-lowercase': true,
		// Force tags to be lowercase
		'attr-lowercase': true,
		// Force attribute names to be lowercase e.g. <div id="header"> is invalid
		'attr-value-double-quotes': true,
		// Force attributes to have double quotes rather than single
		'doctype-first': true,
		// Force the DOCTYPE declaration to come first in the document
		'spec-char-escape': true,
		// Force special characters to be escaped
		'id-unique': true,
		// Prevent using the same ID multiple times in a document
		'head-script-disabled': true,
		// Prevent script tags being loaded in the  for performance reasons
		'style-disabled': true
		// Prevent style tags. CSS should be loaded through
	},
	html1: {
		src: ['<%= temp %>/**/*.html']
	},
	html2: {
		src: ['path/to/**/*.html']
	}
}
