module.exports = {

		// Check CSS files for rule violations
		// See https://github.com/stubbornella/csslint/wiki
		// https://github.com/gruntjs/grunt-contrib-csslint
		//
		// .csslintrc - a value of false ignores the rule, a value of 2 will set it
		// to become an error. Otherwise all rules are considered warnings
		// Rules: https://github.com/stubbornella/csslint/wiki/Rules

		options: {
			csslintrc: 'csslint.csslintrc',
			formatters: [
				{
					id: 'compact',
					dest: 'report/csslint.json'
				}
			]
		},
		strict: {
			options: {
				import: 2
			},
			src: ['<%= temp %>/css/**/*.css']
		},
		lax: {
			options: {
				import: false
			},
			src: ['<%= temp %>/css/**/*.css']
		}

}