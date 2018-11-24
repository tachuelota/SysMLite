module.exports = function( grunt ){

	grunt.config.merge( {
		watch: {
			configFiles: {
				files: [
					'package.json',
					'gruntfiles/*.js',
					'GruntFile.js'
				],
				tasks: [ 'dev-deploy' ]
			},
			scripts: {
				files: [
					'app/**/*.js'
				],
				tasks: [ 'dev-deploy' ]
			}
		}
	});

	grunt.registerTask( 'contrib-watch',	[ 'watch' ]);
}
