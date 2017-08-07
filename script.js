var startPlaying = false;
var isNotReadyToPlay = true;


var cols = 4;
var rows = 3;


$(document).ready(function(){
	next(cols ,rows);
});



function next(c, r) {
  var i, animateOptions, myShapes;


	if(!isNotReadyToPlay) {
		return;
	}

	isNotReadyToPlay = false;


}
