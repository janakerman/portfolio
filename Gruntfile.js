'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        config: {
          dev: {
            options: {
              variables: {
                'outputFolder': 'dev/'
              }
            }
          },
          prod: {
            options: {
              variables: {
                'outputFolder': 'prod/'
              }
            }
          }
        },

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
          js: ["<%= grunt.config.get('outputFolder') %>"]
        },

        copy: {
          main: {
            files: [{ expand: true, src: ['app/require-config.js', 'app/index.html'], dest: "<%= grunt.config.get('outputFolder') %>/", flatten: true, filter: 'isFile' }]
          },
        },

        requirejs: {
          development: {
            options: {
              name: "app",
              baseUrl: "app/",
              mainConfigFile: "app/require-config.js",
              out: "<%= grunt.config.get('outputFolder') %>/<%= pkg.name %>.js",
              include: ['../node_modules/requirejs/require.js', '../node_modules/jquery/dist/jquery.js', '../node_modules/bootstrap/dist/js/bootstrap.js'],
              optimize: 'none',
              generateSourceMaps: true,
            }
          },
          production: {
            options: {
              name: "app",
              baseUrl: "app/",
              mainConfigFile: "app/require-config.js",
              out: "<%= grunt.config.get('outputFolder') %>/<%= pkg.name %>.js",
              include: ['../node_modules/requirejs/require.js', '../node_modules/jquery/dist/jquery.js', '../node_modules/bootstrap/dist/js/bootstrap.js'],
              optimize: 'uglify',
              preserveLicenseComments: false
            }
          }
        },

        less: {
          development: {
            options: {
                strictImports: true,
                compress: false,
                yuicompress: false,
                optimization: 2,
                sourceMap: true,
                sourceMapFilename: "<%= grunt.config.get('outputFolder') %>/<%= pkg.name %>.css.map",
                sourceMapURL: "<%= pkg.name %>.css.map", 
                sourceMapBasepath: "<%= grunt.config.get('outputFolder') %>/"
            },
            files: {
              "<%= grunt.config.get('outputFolder') %>/<%= pkg.name %>.css": "app/app.less"
            }
          },
          production: {
            options: {
                strictImports: true,
                compress: true,
                optimization: 1,
                yuicompress: true
            },
            files: {
              "<%= grunt.config.get('outputFolder') %>/<%= pkg.name %>.css": "app/app.less"   
            }
          }
        }

    });
    
    // Load all grunt tasks from package.json automatically.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', 'serve:dev');

    // Builds the project then watches for any changes.
    grunt.registerTask('dev', ['build', 'watch']);

    var commonAssembleTasks =  ['jshint', 'clean', 'copy'];

    // Builds and validates the project.
    grunt.registerTask('build:dev', commonAssembleTasks.concat(['requirejs:development', 'less:development']));
    grunt.registerTask('build:prod', commonAssembleTasks.concat(['requirejs:production', 'less:production']));

    grunt.registerTask('serve:dev', ['config:dev', 'http-server', 'build:dev', 'watch']);
    grunt.registerTask('serve:prod', ['config:prod', 'http-server', 'build:prod', 'watch']);
};
