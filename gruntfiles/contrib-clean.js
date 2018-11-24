module.exports = function( grunt ){

	grunt.config.merge( {
		clean: {
			options: {
				'force': true
			},
			src: [ '/Users/john/Library/Application Support/StarUML/extensions/user/SysMLite/*' ]
		}
	});

	grunt.registerTask( 'clean-dev',	[ 'clean' ] );
}
