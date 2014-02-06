module.exports = {

	// Rules based on css-condense
	// https://github.com/rstacruz/css-condense
	// BEWARE: https://github.com/rstacruz/css-condense#but-youll-risk-breaking-things

	csscFirstSet: {
		options:{
			sortSelectors: true,
			lineBreaks: true,
			sortDeclarations:true,
			consolidateViaDeclarations:false,
			consolidateViaSelectors:false,
			consolidateMediaQueries:false,
		},
		files: {
			'examples/main.css': 'examples/css/main.css'
		}
	},
	csscSecondSet: {

	}

}