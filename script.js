var littleBoxes = document.getElementsByClassName('box');

//iterate over the array to add an event listener to each individual box
for(var i=0;i<littleBoxes.length;i++){
    littleBoxes[i].addEventListener('click', addPlayerMark);
}
// now each item with class 'box' has an event listener on it. when any box is clicked it will run function addPlayerMark, detailed below
// variable turnCounter will tell the program whether to add an X or an O
var turnCounter = 1;
var xMarks = [];
var oMarks = [];
var winningCombos = [["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];


function checkWinners(marksArray, name){

// for loop to get first array from possible combos
  for (i = 0; i < winningCombos.length; i++) {
// set up a var to count number of wins
    var numWins = 0;
// for loop to go over each value in each array
    for (var p = 0; p < winningCombos[i].length; p++) {
// if statement to match number in winning combo array to number in marksArray
      if(marksArray.indexOf(winningCombos[i][p]) !== -1){
        numWins++;
      }
// when numWins hits 3, that means some combo of moves has matched to a complete array in winningCombos
      if(numWins === 3){
          alert("Game over: " + name + " wins!");
          playNewGame();
      }
    }
  }
}


// call function addPlayerMark takes event as an argument. event in this case = click
function addPlayerMark(event) {

// if the inner HTML of the box we clicked equals 0, we run this part of the function
    if (event.target.innerHTML.length === 0){
// this if-else sequence tells the program whether to enter an X or an O
        if (turnCounter % 2 === 0) {
// adds id value to xMarks array
            xMarks.push(event.target.id);
            console.log(xMarks);
//the next 2 lines alter the html and background color of the clicked box
            event.target.innerHTML = "X";
            event.target.style.background = "red";
        } else {
// adds id value to oMarks array
            oMarks.push(event.target.id);
            console.log(oMarks);
//the next 2 lines alter the html  and background color of the clicked box
            event.target.innerHTML = "O";
            event.target.style.background = "blue";
        }
// if the inner HTML of the box we clicked does not equal 0, i.e. a player has already clicked that box, we run this part of the function

    } else {
        alert("Aww, already clicked! Try another square.");
   }
//increase the turn counter so the next click triggers the opposite part of the function
    turnCounter++;
    checkWinners(xMarks, "X");
    checkWinners(oMarks, "O");
    if (turnCounter === 10) {
        alert("It's a draw! Reset the board to play again.");
    }
    // } else if (turnCounter % 2 === 0){
    //     alert("It's X's turn!");
    // } else{
    //     alert("It's O's turn!");
    // }

}

// add event listener for click on the game reset button
document.getElementById('boardResetButton').addEventListener("click", playNewGame);

//create function that iterates over the array littleBoxes after reset button is clicked
function playNewGame(event){
    for(var i=0;i<littleBoxes.length;i++){
//the next three lines alter the html and background color of the clicked box
        littleBoxes[i].innerHTML = "";
        littleBoxes[i].style.background = "white";
        }
// reset the turn counter
    turnCounter = 1;
    oMarks = [];
    xMarks = [];
}
