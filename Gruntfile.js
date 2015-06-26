'use strict';

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		express: {
			dev: {
				options: {
					script: './bin/www'
				}
			}
		},

		watch: {
			express: {
				files: [ '**/*.js', '!public/js/**/*.js' ],
				tasks: [ 'express:dev' ],
				options: {
					spawn: false
				}
			},
			sass: {
				files: [ 'public/scss/**/*.scss' ],
				tasks: [ 'sass:main' ],
				options: {
					spawn: false
				}
			}
		},

		sass: {
			main: {
				files: {
					'public/css/screen.css': 'public/scss/screen.scss'
				}
			}
		},

		shell: {
			'bower-installer': {
				command: 'bower-installer',
				stdout: true,
				failOnError: true
			}
		},

		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			watch: [
				'watch:sass',
				'watch:express'
			]
		}

	});

	grunt.registerTask('init', [
		'shell:bower-installer'
	]);

	grunt.registerTask('dev', [
		'sass:main',
		'express:dev',
		'concurrent'
	]);
};