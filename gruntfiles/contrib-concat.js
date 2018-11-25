module.exports = function( grunt ){

	grunt.config.merge( {
		concat: {
			options: {
				stripBanners: {
					'block': false,
					'line': false
				},
				process: false,
				separator: '\n'
			},
			main: {
				src: [
					'app/src/*.js',
					'app/src/common.js',
					'app/main.js'
				],
				dest: 'build/main.js'
			}
		}
	});

	grunt.registerTask( 'concat-js',	[ 'concat:main' ] );
}
