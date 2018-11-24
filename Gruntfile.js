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


	grunt.registerTask( 'dev-deploy',	[ 'clean-dev', 'git-info', 'concat-js', 'copy-ext' ]);
	grunt.registerTask( 'default',		[ 'dev-deploy', 'contrib-watch'] );
}
