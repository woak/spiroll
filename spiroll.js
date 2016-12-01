// Authors: Avi Block and Teddy Laurita
// Date: 11/28/16
// Usernames: ablock03 
//			   tlauri02
// Emails: theodore.laurita@tuft.edu
//		    avram.block@tufts.edu	 

// -------------------------sprioll tests------------------------- //

function Spiroll() {
	// STUB
	// SPIROLL OBJECT

	this.initializeScroll = function() {
		console.log("KEY PRESSED FUNTION");
	}
}



// -------------------------initialize object------------------------- //

spiroll = new Spiroll();
window.onkeydown = function(e) {
	var code = e.keyCode ? e.keyCode : e.which;
	if (code == 17) {
		spiroll.initializeScroll;
	}
	document.getElementById('output').innerHTML = code;
	console.log("Code:" + code);
}
