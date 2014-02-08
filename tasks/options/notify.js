module.exports = {

	// Automatic Notifications when Grunt tasks fail
	// https://github.com/dylang/grunt-notify

	watch: {
		options: {
			title: 'Task Complete',  // optional
			message: 'SASS finished running', //required
		}
	},
	server: {
		options: {
			message: 'Server is ready!'
		}
	}

}