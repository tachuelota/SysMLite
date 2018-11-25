/*
 * SysMLite
 * BDD.js
 *
 * This should handle most of the work for creating a Block Defination Diagram (BDD).
 */

class SysMLiteBDD {
	constructor() {
		this.project = app.repository.select( "@Project" )[ 0 ];
		this.model = app.factory.createModel( { id: "UMLModel", parent: this.project } );
	};

	buildBDD(){
		var options = {
			id: "SysMLiteBDD",
			parent: this.model,
			diagramInitializer: function( dgm ) {
				dgm.name = "Block Defination Diagram";
				dgm.defaultDiagram = true;
			}
		}
		var diag = app.factory.createDiagram( options );
	}
};


function addNewBDD(  ) {
	var a = new SysMLiteBDD();
	a.buildBDD();
};

exports.addNewBDD = addNewBDD;
