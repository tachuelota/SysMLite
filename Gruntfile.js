module.exports = function ( grunt ){
	require( 'load-grunt-tasks' )( grunt );

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' )
	});


	require( './gruntfiles/contrib-clean.js')( grunt );
	require( './gruntfiles/contrib-concat.js' )( grunt );
	require( './gruntfiles/contrib-copy.js') ( grunt );
	require( './gruntfiles/contrib-watch.js' )( grunt );
	require( './gruntfiles/gitinfo.js' )( grunt );
	require( './gruntfiles/version.js' )( grunt );



	grunt.registerTask( 'production',	[ 'version-deploy', 'dev-deploy', 'clean-prod', 'copy-prod'] );

	grunt.registerTask( 'dev-deploy',	[ 'clean-dev', 'git-info', 'concat-js', 'copy-dev' ]);
	grunt.registerTask( 'default',		[ 'dev-deploy', 'contrib-watch'] );
}
