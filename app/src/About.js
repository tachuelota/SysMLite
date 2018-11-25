
class SysMLiteAbout {
	constructor () {
		this.about = SysMLiteObj.product + " " +
		SysMLiteObj.version + "\n" +
		SysMLiteObj.author;
	};

	showAbout(){
		handleShowMessage( this.about );
	};
};

function about(){
	var a = new SysMLiteAbout();
	a.showAbout();
};

exports.about = about;
