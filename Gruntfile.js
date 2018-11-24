module.exports = function ( grunt ){
	require( 'load-grunt-tasks' )( grunt );

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' )
	});


	require( './gruntfiles/gitinfo.js' )( grunt );
	require( './gruntfiles/contrib-clean.js')( grunt );
	require( './gruntfiles/contrib-concat.js' )( grunt );


	grunt.registerTask( 'dev-deploy',	[ 'clean-dev', 'gitInfo' ]);
	grunt.registerTask( 'default',		[ 'dev-deploy', 'contrib-watch'] );
}
