module.exports = function( grunt ){

	grunt.config.merge( {
		concat: {
			options: {
				stripBanners: {
					'block': false,
					'line': false
				},
				process: false,
				separator: '\n /* ---------- */\n\n'
			},
			main: {
				src: [
					'app/main.js',
					'app/src/**/*.js'
				],
				dest: 'deploy/main.js'
			},
			keymaps: {
				src: [ 'app/keymaps/*' ],
				dest: 'deploy/keymaps/SysMLite.json'
			},
			menus: {
				src: [ 'app/menus/*' ],
				dest: 'deploy/menus/SysMLite.json'
			},
			toolbox: {
				src: [ 'app/toolbox/*' ],
				dest: 'deploy/toolbox/SysMLite.json'
			},
			stylesheets: {
				src: [ 'app/stylesheets/*' ],
				dest: 'deploy/stylesheets/SysMLite.css'
			},
			preferences: {
				src: [ 'app/preferences/*' ],
				dest: 'deploy/preferences/SysMLite.json'
			}
		}
	});

	grunt.registerTask( 'concat-menu', 	[ 'concat:menus', 'concat:toolbox' ] );
	grunt.registerTask( 'concat-pref', 	[ 'concat:keymaps', 'concat:preferences' ] );
	grunt.registerTask( 'concat-css', 	[ 'concat:stylesheets' ] );

	grunt.registerTask( 'concat-js',	[ 'concat:main', 'concat-menu', 'concat-pref', 'concat-css' ] );
}
