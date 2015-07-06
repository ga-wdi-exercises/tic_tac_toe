//Start when page loads
//Target elements in HTML to access in JS file
//define variables to keep track of whose turn it is and who wins each round
//define variabls for X and O moves

window.onload = start;
var boxes = document.getElementsByClassName("square");
var moveTracker = 1;
var winTracker = 0;
var xMoves = [];
var oMoves = [];

//Set up event listener to listen for click

for (var 1 = 0; i < boxes.length; i++) {
  boxes[i].addEventListner('click', 'recordPlayerMove');
}

//define square combos that result in a win

var winningCombos: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

//set up function to identify winner

function identifyWinner () {

}
