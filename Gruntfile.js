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
            files: ['app/**/*'],
            tasks: ['build'],
            options: {
              livereload: true,
            }
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

    // Builds the project then watches for any changes.
    grunt.registerTask('dev', ['build', 'watch']);

    // Builds and validates the project.
    grunt.registerTask('build', ['jshint']);

    // Starts a HTTP server before running the dev task.
    grunt.registerTask('dev:serve', ['http-server', 'dev']);
};