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


	/*
	 * For Production:
	 * 1. Update the Version minor
	 * 2. Run `For Development` See below
	 * 3. clean out the production space `SysMLite/deploy
	 * 5. Copy the deploy directory into working directory see below
	 */

	grunt.registerTask( 'production',	[ 'version-deploy', 'dev-deploy', 'clean-prod', 'copy-prod'] );

	/*
	 * For Development:
	 * 1. clear files from dev space `SysMLite/build`
	 * 2. Pull the git info
	 * 3. create the main.js from all the correct files into build directory
	 * 4. Move all files and directories needed into build directory
	 * 5. Copy the build directory into working directory `~/Library/Application Support/StarUML/extensions/user/SysMLite/`
	 */

	grunt.registerTask( 'dev-deploy',	[ 'clean-dev', 'git-info', 'concat-js', 'copy-dev' ]);
	grunt.registerTask( 'default',		[ 'dev-deploy', 'contrib-watch'] );
}
