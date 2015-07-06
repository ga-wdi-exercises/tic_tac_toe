//Location of squares in the html
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var E = document.getElementById("E");
var F = document.getElementById("F");
var G = document.getElementById("G");
var H = document.getElementById("H");
var I = document.getElementById("I");
//Array of locations
var locationArray = [A, B, C, D, E, F, G, I, J];
//all the values of the squares
var aValue = 0;
var bValue = 0;
var cValue = 0;
var dValue = 0;
var eValue = 0;
var fValue = 0;
var gValue = 0;
var hValue = 0;
var iValue = 0;
//array for values
var valueArray = [aValue, bValue, cValue, dValue, eValue, fValue, gValue, hValue, iValue];
//winning combinations
var winningCombination = [aValue, bValue, cValue], [dValue, eValue, fValue], [gValue, hValue, iValue],
[aValue, dValue, gValue], [bValue, eValue, hValue], [cValue, fValue, iValue],
[aValue, eValue, iValue], [gValue, eValue, cValue];
//reset button
var reset = document.getElementById("reset");

// What I think the code should look like.. It doesn't work at all
function reset(){
  for (var i = 0; i < locationArray.length; i++){
    locationArray[i].innerHTML === "";
  }
  for (var x = 0; x < valueArray.length; x++){
    valueArray[x] = 0;
  }
  }

// call reset
reset.addEventListeners("click",reset);

//making moves
locationArray.addEventListeners("Click", makingMoves);

//Let player one make a move, assign value to
function makingMoves(locationArray){
   if (playerOne === 1){
    locationArray === "X";
    valueArray === 1;
    playerOne === 0;
  }

  //Allow player Two to move, set move back to Player One
  else if (playerOne === 0) {
    locationArray === "O";
    valueArray=== .2;
    playerOne === 1;
  }
//Check if move as already been made in square
for (i = 0; i < valueArray.length; i ++){
  if (valueArray[i] = 1){
    alert("Space occupied");
  }
}
//choosing winner
for (var i = 0; i < winningCombination.length; i ++){
  if (winningCombination[i] === 3) {
    console.log("Player One has won!");
}
}
for (var i = 0; i < winningCombination.length; i ++){
  if (winningCombination[i] === .6) {
    console.log("Player Two has won!");
}
}
}
