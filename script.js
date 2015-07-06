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
	winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	
	document.getElementById(smallArray[0]).innerHTML && 
	document.getElementById(smallArray[0]).innerHTML === 
	document.getElementById(smallArray[1]).innerHTML === 
	document.getElementById(smallArray[2]).innerHTML
}

function clearBoard() {
	var boxes = document.getElementsByClassName('box');
	for ( var i = 0; i < boxes.length; i++ ) {
		boxes[i].innerHTML = null;
	}
}
setUpBoard();
