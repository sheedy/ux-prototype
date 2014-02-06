module.exports = {

	//General purpose text replacement for grunt. Allows you to replace text in files using strings, regexs or functions.
	// https://github.com/yoniholmes/grunt-text-replace
	//
	// Currently using this as a hack to make up for usemin's inability
	// to resolve relative paths

	build: {
		src: ['<%= build %>/**/*.html'],	// source files array (supports minimatch)
		overwrite: true,					// overwrite original files
		replacements: [{
			from: '../<%= build %>',		// string replacement
			to: '..'
		}]
	}
}