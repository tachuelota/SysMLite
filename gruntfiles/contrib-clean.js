module.exports = function( grunt ){

	grunt.config.merge( {
		clean: {
			dev: {
				options: {
					'force': true
				},
				src: [ '/Users/john/Library/Application Support/StarUML/extensions/user/SysMLite/*',
			 		   'build/*'
				]
			},
			prod: {
				options: {
					'force': true
				},
				src: [ 'deploy/*' ]
			}

		}
	} );

	grunt.registerTask( 'clean-dev',	[ 'clean:dev' ] );
	grunt.registerTask( 'clean-prod',	[ 'clean:prod' ] );
}
