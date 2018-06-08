module.exports = function (grunt) {
	grunt.initConfig({
		// Watch task config
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: "src/scss/*.scss",
				tasks: ['sass']
			},
			scripts: {
				files: "src/js/*.js",
				tasks: ['uglify']
			}
		},
		// SASS task config
		sass: {
			dev: {
				files: {
					// destination         // source file
					"dist/css/style.css": "src/scss/style.scss"
				}
			}
		},
		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						"src/scss/*.scss",
						"src/js/*.js",
						"*.html"
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: "./"
					}
				}
			}
		},
		uglify: {
			my_target: {
				files: {
					'dist/js/main.min.js': ['src/js/main.js']
				}
			}
		},
		cssmin: {
			target: {
			  files: {
				'dist/css/style.min.css': 'dist/css/style.css'
			  }
			}
		  }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['browserSync', 'watch']);
};
