
function handleShowMessage( /*String*/ message  ) {
	window.alert( message );
}

function about( ){
	handleShowMessage( "SysMLite v0.1.0\n" +
	"By John R. Brewster\n" +
	"jb259@gatech.edu" )
}

function addNewBDD(  ) {
	handleShowMessage( "SysMLite BDD" );
}

function addNewIBDD(  ) {
	handleShowMessage( "SysMLite IBDD" );
}

function addNewREQ(  ) {
	handleShowMessage( "SysMLite REQ" );
}




function init() {
	app.commands.register( 'SysMLite:show-help', about );	// About

	app.commands.register( 'SysMLite:new-bdd', addNewBDD ); 			// Block Defination Diagram
	app.commands.register( 'SysMLite:new-ibdd', addNewIBDD ); 			// Internal Block Defination Diagram
	app.commands.register( 'SysMLite:new-req', addNewREQ ); 			// Requirements Diagram
}

exports.init = init;
