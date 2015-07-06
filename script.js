// Set Variables
var currentPlayer = 0;
var gameOver = false;

var boardCell1 = document.getElementById("1");
var boardCell2 = document.getElementById("2");
var boardCell3 = document.getElementById("3");
var boardCell4 = document.getElementById("4");
var boardCell5 = document.getElementById("5");
var boardCell6 = document.getElementById("6");
var boardCell7 = document.getElementById("7");
var boardCell8 = document.getElementById("8");
var boardCell9 = document.getElementById("9");

function switchPlayer() {

    if (currentPlayer === "X") {
        return "0";
    } else {
        return "X";
    }
}

function checkSquares() {
	
    if (squares < 9) {
        console.log("Game is still in play.");
    } else {
        return true;
        console.log("Game is over.")
    }
}

function winsRow(player) {
	if () {
		console.log("Top row won!");
		return true;

	} else if ()) {
		console.log("Middle row won!");
		return true;

	} else if () {
		console.log("Bottom row won!");
		return true;
	}
}

function winsColumn(player) {
	if () {
		console.log("First column won!");
		return true;

	} else if () {
		console.log("Second column won!");
		return true;

	} else if () {
		console.log("Last column won!");
		return true;
	}
}

function winsDiagonal(player) {
	if () {
		console.log("Backward diagonal won");
		return true;

	} else if () {
		console.log("Forward diagonal won!");
		return true;
	}
}

function getWinner() {
	if (playerWinner("X")) {
		return "X";

	} else if (playerWinner("O")) {
		return "O";
	}
}