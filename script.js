// Set variables for each respective move
var x = "X"
var o = "O"
var boxNumber;
// Create functions to place X or O, taking in boxNumber to choose where to place
function placeX(boxNumber) {
	document.getElementById(boxNumber).innerHTML = x;
}

function placeO(boxNumber) {
	document.getElementById(boxNumber).innerHTML = o;
}

// placeX("box3");
// Setting up the move counter to decide whose turn it is
// var moveCounter = 1;
// for(i = 0; ) {

// }

var move = document.getElementById(boxNumber);

document.getElementById("box1").addEventListener("click", function() { document.getElementById("box1").innerHTML = x;});

// document.onclick = myFunction;

// function myFunction() {
// 	document.getElementById("box1").style.backgroundColor = "#CFF09E";
// }

// document.getElementById("box1").addEventListener("onclick", function(){
//     document.getElementById("box2").firstChild.innerHTML = "Hello World";
// });

// document.getElementById("box1").onmouseover