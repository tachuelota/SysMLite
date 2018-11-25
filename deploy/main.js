function about( ){
	handleShowMessage( "SysMLite v0.1.0\n" +
	"By John R. Brewster\n" +
	"jb259@gatech.edu" )
}

function buildBDD( ){

	var project = app.repository.select( "@Project" )[ 0 ];

	var model = app.factory.createModel( { id: "UMLModel", parent: project } );

	var options = {
  		id: "SysMLiteBDD",
  		parent: model,
  		diagramInitializer: function (dgm) {
	    dgm.name = "Block Defination Diagram";
	    dgm.defaultDiagram = true;
	}
}

	var diag = app.factory.createDiagram( options );
}




function addNewBDD(  ) {
	buildBDD();
	// handleShowMessage( "SysMLite BDD" );
}

function handleShowMessage( /*String*/ message  ) {
	window.alert( message );
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
