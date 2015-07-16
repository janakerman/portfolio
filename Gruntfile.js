'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                'app/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            files: [
                'app/**/*'
            ],
            tasks: ['dev']
        },
        'http-server': {
            dev: {
                root: '.',
                port: 8080,
                host: "0.0.0.0",
                showDir: true,
                autoIndex: true,
                ext: "html",
                runInBackground: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', 'dev');

    grunt.registerTask('dev', ['jshint', 'watch']);
    // Should start the server
    grunt.registerTask('dev:serve', ['http-server', 'dev']);


};