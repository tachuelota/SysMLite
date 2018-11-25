module.exports = function( grunt ){

	grunt.config.merge( {
		copy: {
			dev: {
				expand: true,
				cwd: 'build',
				src:  '**',
				dest: '/Users/john/Library/Application Support/StarUML/extensions/user/SysMLite/'
			},
			build: {
				expand: true,
				cwd: 'app',
				src: [
					'keymaps/*',
					'menus/*',
					'preferences/*',
					'LICENSE',
					'README.md'
				],
				dest: 'build'
			},
			prod: {
				expand: true,
				cwd: 'build',
				src:  '**',
				dest: 'deploy'
			}
		}

	} );

	grunt.registerTask( 'copy-prod',	[ 'copy:prod' ])
	grunt.registerTask( 'copy-dev',		[ 'copy:build', 'copy:dev' ] );
}
