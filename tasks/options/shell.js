module.exports = {

	// Run shell commands
	// https://github.com/sindresorhus/grunt-shell

	getStatus: {                      // Target
		options: {                    // Options
			stdout: true
		},
		command: 'git status --short --branch'
	},
	diff: {
		options: {
			stdout: true
		},
		command: 'git difftool dev@{1} dev'
	},
	diffLast: {
		options: {
			stdout: true
		},
		command: 'git difftool'
	}

}