// Global Variables

var counter = 1;

// Adds 'x' or 'o' to the HTML of the corresponding button
// btnNum is a variable set to the Event Listener
function markMove(btnNum){
	counter += 1;
	var button = document.getElementById(btnNum);
	 if (counter % 2 === 0) {
	    button.innerHTML = "x";
	 }
   else if (counter % 2 === 1) {
	    button.innerHTML = "o";
	 }
}


var playMove = document.getElementById("one");
  playMove.addEventListener("click", function(){
	  markMove("one");
});

var playMove = document.getElementById("two");
  playMove.addEventListener("click", function(){
	  markMove("two");
});

var playMove = document.getElementById("three");
  playMove.addEventListener("click", function(){
	  markMove("three");
});

var playMove = document.getElementById("four");
  playMove.addEventListener("click", function(){
	  markMove("four");
});

var playMove = document.getElementById("five");
  playMove.addEventListener("click", function(){
	  markMove("five");
});

var playMove = document.getElementById("six");
  playMove.addEventListener("click", function(){
  	markMove("six");
});

var playMove = document.getElementById("seven");
  playMove.addEventListener("click", function(){
	  markMove("seven");
});

var playMove = document.getElementById("eight");
  playMove.addEventListener("click", function(){
	  markMove("eight")
});

var playMove = document.getElementById("nine");
  playMove.addEventListener("click", function(){
	  markMove("nine")
});


var clearGame = document.getElementById("clear");
clearGame.addEventListener("click", clearBoard)

function clearBoard(btnNum){
  console.log("clear game")
	var button = document.getElementById(btnNum);
	button.innerHTML = "";
}

// button.innerHTML = ""; is returning an error
