// set variable to go get all 'box' elements, returned into an array
var littleBoxes = document.getElementsByClassName('box');

//iterate over the array to add an event listener to each individual box
for(var i=0;i<littleBoxes.length;i++){
    littleBoxes[i].addEventListener('click', addPlayerMark);
}
// now each item with class 'box' has an event listener on it. when any box is clicked it will run function addPlayerMark, detailed below
// variable turnCounter will tell the program whether to add an X or an O
var turnCounter = 1;

// call function addPlayerMark takes event as an argument. event in this case = click
function addPlayerMark(event) {

// if the inner HTML of the box we clicked equals 0, we run this part of the function
    if (event.target.innerHTML.length === 0){
// this if-else sequence tells the program whether to enter an X or an O
        if (turnCounter % 2 === 0) {
//the next three lines alter the html, id, and background color of the clicked box
            event.target.innerHTML = "X";
            event.target.setAttribute("id","X");
            event.target.style.background = "red";
        } else {
//the next three lines alter the html, id, and background color of the clicked box
            event.target.innerHTML = "O";
            event.target.setAttribute("id","O");
            event.target.style.background = "blue";
        }
//increase the turn counter so the next click triggers the opposite part of the function
    turnCounter++;
// if the inner HTML of the box we clicked does not equal 0, i.e. a player has already clicked that box, we run this part of the function}
} else {
    return confirm("Aww, already clicked! Try another square.");
}

};

// add event listener for click on the game reset button
document.getElementById('boardResetButton').addEventListener("click", playNewGame);

//create function that iterates over the array littleBoxes after reset button is clicked
function playNewGame(event){
    for(var i=0;i<littleBoxes.length;i++){
//the next three lines alter the html, id, and background color of the clicked box
        littleBoxes[i].innerHTML = "";
        littleBoxes[i].style.background = "white";
        littleBoxes[i].setAttribute("id","");
        }
// reset the turn counter
    turnCounter = 1;
}

//
//     // if x was placed last, add o
//     // else if o was placed last, place x
//       /* set the class name on the new div to X-marker or O-marker, depending on the current player */
//     }
//
//

//
// fillSquareWithMarker(square, currentPlayer);
// updateBoard(square.id, currentPlayer);
// checkForWinner();
// switchPlayers();
