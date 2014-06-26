module.exports = function(grunt) {

    grunt.registerTask('test', [
        'clean:server',
        'arialinter',
        'htmlhint',
        // 'concurrent:test',
        // 'connect:test',
        // 'mocha'
    ]);

}