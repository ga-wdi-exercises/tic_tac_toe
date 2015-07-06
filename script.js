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
var playerTurn = document.getElementsByClassName("player-turn")[0];


var moveCounter = 1;
playerTurn.innerHTML = "X's turn!"
function makeMove(boxNumber) {
	moveCounter++;
	if(cells[boxNumber-1].innerHTML != "X" || "O") {
		if (moveCounter % 2 === 0) {
			placeO(boxNumber);
			playerTurn.innerHTML = "X's turn!"
		} else {
			placeX(boxNumber);
			playerTurn.innerHTML = "O's turn!"
		}
	} else {
		console.log("Place somewhere else.");
	}
}

// cells[0].addEventListener("click", makeMove(1));


// move.addEventListener("click", function() { document.getElementById(boxNumber).innerHTML = x;});


// Reset board
var reset = document.getElementsByTagName("A")[0];

reset.addEventListener("click", resetBoard);

function resetBoard() {
for(i = 0; i <= 8; i++) {
	document.getElementsByTagName("TD")[i].innerHTML = "";
	}
}