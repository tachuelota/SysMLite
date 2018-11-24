module.exports = function( grunt ){

	grunt.config.merge( {
		gitinfo: {}
	});

	grunt.registerTask( 'gitInfo',	[ 'gitinfo' ] );
}
