module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ['js/scripts.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		uglify: {
			target: {
				files: {
					'js/javascript.js': ['js/scripts.js']
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					//cwd: 'release/css',
					src: ['*.css', '!*.min.css'],
					dest: '/css/styles.min.css',
					//ext: '.min.css'
				}]
				// files: {
				// 	'css/styles.css': ['css/style.css']
				// }
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// grunt.registerTask('watch', ['jshint']);
	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

};