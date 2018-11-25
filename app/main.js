/*
 * main.js
 * Main file that will register the different modules of my app.
 *
 */


function init() {
	app.commands.register( 'SysMLite:show-help', about );	// About

	app.commands.register( 'SysMLite:new-bdd', addNewBDD ); 			// Block Defination Diagram
	app.commands.register( 'SysMLite:new-ibdd', addNewIBDD ); 			// Internal Block Defination Diagram
	app.commands.register( 'SysMLite:new-req', addNewREQ ); 			// Requirements Diagram
}

exports.init = init;
