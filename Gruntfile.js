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

	grunt.registerTask('_compile', [
		'sass:main'
	]);

	grunt.registerTask('_server', [
		'express:dev'
	]);

	grunt.registerTask('_watch', [
		'concurrent'
	]);

	grunt.registerTask('init', [
		'_compile'
	]);

	grunt.registerTask('dev', [
		'_compile',
		'_server',
		'_watch'
	]);
};