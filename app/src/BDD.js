/*
 * SysMLite
 * BDD.js
 *
 * This should handle most of the work for creating a Block Defination Diagram (BDD).
 */

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
