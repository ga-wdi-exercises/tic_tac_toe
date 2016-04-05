var click = 0;

function updateSquare() {
 console.log("jk");
 click = click + 1;
 console.log(click);
 if (click%2 !==0) {
   square1.textContent= "X";
   square2.textContent= "X";
   square3.textContent= "X";
   square4.textContent= "X";
   square5.textContent= "X";
   square6.textContent= "X";
   square7.textContent= "X";
   square8.textContent= "X";
   square9.textContent= "X";
 } else {
   square1.textContent= "O";
   square2.textContent= "O";
   square3.textContent= "O";
   square4.textContent= "O";
   square5.textContent= "O";
   square6.textContent= "O";
   square7.textContent= "O";
   square8.textContent= "O";
   square9.textContent= "O";
 }
}

$( document ).ready(function() {
 console.log("Pizza");
 var square1 = $("#square1");
 square1.on("click", updateSquare);
});

reset.on("click", resetBoard);
   console.log("reset here.");
function resetBoard() {
   square1.textContent = "";
}

// Second variable.
var square =
["square1",
"square2",
"square3",
"square4",
"square5",
"square6",
"square7",
"square8",
"square9"];
// initial values.
// square = null;
// Turn variable.
// var turn = 1;
// Turn countervairable.
var turnCounter = $("#button");
var reset = $("#reset");
