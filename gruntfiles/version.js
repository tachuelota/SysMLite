module.exports = function( grunt ){

	// $ grunt --SysMLiteVersion=[ major | minor | patch | "x.y.z" ]
	// where x.y.z is a valid String

	var mmpp = grunt.option( 'SysMLiteVersion' ) || 'patch';

	var dt = new Date();
	var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
	var dts = 'dev' +
				dt.getDate().toString() +
				mon[ dt.getMonth() ] +
				dt.getFullYear().toString().substring( 2 );

	var mesg = grunt.file.readJSON( 'package.json' ).version;

	grunt.log.write( '\nBuilding on SysMLite Version: ').writeln( mesg.magenta );

	grunt.config.merge( {
		version: {
			options: {
				pkg: "package.json",
				release: mmpp,
				prereleaseIdentifier: dts
			},
			dev: {
				src: [ 'app/assets/version.js', 'package.json']
			}
		}
	} );


	grunt.registerTask( 'version-deploy',	[ 'version:dev' ] );

}
