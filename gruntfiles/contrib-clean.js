module.exports = function( grunt ){

	grunt.config.merge( {
		clean: {
			dev: [  '‎/Users/john/Library/Application\ Support/StarUML/extensions/user/SysMLite/' ]
		}
	});

	grunt.registerTask( 'clean-dev',	[ 'clean:dev' ] );
}
