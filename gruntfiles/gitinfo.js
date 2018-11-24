module.exports = function( grunt ){

	grunt.config.merge( {
		gitInfo: {
			output: 'app/assets/gitinfo.json'
		}
	});

	grunt.registerTask( 'git-info',	[ 'gitInfo' ] );
}
