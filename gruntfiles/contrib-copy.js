module.exports = function( grunt ){
	grunt.config.merge( {
		copy: {
			main: {
				expand: true,
				cwd: 'deploy',
				src:  '**',
				dest: '/Users/john/Library/Application Support/StarUML/extensions/user/SysMLite/'
			}
		}

	} );


	grunt.registerTask( 'copy-ext',	[ 'copy:main' ] );
}
