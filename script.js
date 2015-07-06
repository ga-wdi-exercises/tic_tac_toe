// Set variables for each respective move
var x = "X"
var o = "O"
// Create functions to place X or O, taking in boxNumber to choose where to place
function placeX(boxNumber) {
	document.getElementById(boxNumber).innerHTML = x;
}
function placeO(boxNumber) {
	document.getElementById(boxNumber).innerHTML = o;
}

// placeX(1);
// placeO("2");

var cells = document.getElementsByTagName("TD");

var moveCounter = 1;
function makeMove(boxNumber) {
	moveCounter++;
	if (moveCounter % 2 === 0) {
		placeO(boxNumber);
	} else {
		placeX(boxNumber);
	}
}

// cells[0].addEventListener("click", makeMove(1));


// move.addEventListener("click", function() { document.getElementById(boxNumber).innerHTML = x;});


// Reset board
var reset = document.getElementsByTagName("A");
// reset.addEventListener("click", resetBoard);

function resetBoard() {
for(i = 0; i < reset.length; i++) {
	document.getElementsByTagName("TD")[i].innerHTML = "";
	}
}