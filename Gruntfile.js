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
            files: ['app/**/*', 'Gruntfile.js'],
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
        },

        clean: {
          js: ["build/"]
        },

        copy: {
          main: {
            files: [{ expand: true, src: ['app/require-config.js', 'app/index.html'], dest: 'build/', flatten: true, filter: 'isFile' }]
          },
        },

        requirejs: {
          compile: {
            options: {
              name: "app",
              baseUrl: "app/",
              mainConfigFile: "app/require-config.js",
              out: "build/portfolio.js",
              include: ['../node_modules/requirejs/require.js', '../node_modules/jquery/dist/jquery.js', '../node_modules/bootstrap/dist/js/bootstrap.js'],
              optimize: 'none',
              generateSourceMaps: true,
            }
          }
        },

        less: {
          development: {
            options: {
                compress: false,
                yuicompress: false,
                optimization: 2,
                sourceMap: true,
                sourceMapFilename: 'build/app.css.map',
                sourceMapURL: 'app.css.map', 
                sourceMapBasepath: 'build/'
            },
            files: {
              "build/app.css": "app/app.less"
            }
          }
        }

    });
    
    // Load all grunt tasks from package.json automatically.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', 'dev');

    // Builds the project then watches for any changes.
    grunt.registerTask('dev', ['build', 'watch']);

    // Builds and validates the project.
    grunt.registerTask('build', ['jshint', 'clean', 'copy', 'requirejs', 'less:development']);

    // Starts a HTTP server before running the dev task.
    grunt.registerTask('serve', ['http-server', 'build', 'watch']);

    grunt.registerTask('serve:prod', '')
};
