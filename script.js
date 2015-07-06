var currentPlayer;  

function setUpBoard() {
	for ( var i = 1; i < 10; i++ ) {
		document.getElementById(i).onclick = makeMove;
	}
	currentPlayer = 'x';

	document.getElementById('reset').onclick = clearBoard;
}

function makeMove() {
	if (this.innerHTML) {
		return;
	}
	this.innerHTML = currentPlayer;

	checkWinner();

	currentPlayer = currentPlayer == 'x' ? 'o' : 'x';
}

function checkWinner() {
	
}

function clearBoard() {
	var boxes = document.getElementsByClassName('box');
	for ( var i = 0; i < boxes.length; i++ ) {
		boxes[i].innerHTML = null;
	}
}
setUpBoard();
