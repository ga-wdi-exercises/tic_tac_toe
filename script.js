/* Abstraction of game board for bonus features (i.e. checking if player won the game.)
var board = [[null, null, null],[null, null, null],[null, null, null]];
console.log(board);
*/

var turnCounter = 0;

// Select the board, as the parent element of the cells that will be changed, and add event listener
var gameboard = document.getElementById("board");
gameboard.addEventListener("click", changeSymbol, false);

// Select the reset button, add event listener
var resetButton = document.getElementsByClassName("reset")[0];
resetButton.addEventListener("click", resetBoard, false);

function changeSymbol(e) {
  // Console.log the DOM element being captured (for debugging)
  //console.log(e);

  // Switch the element's symbol if it's not the parent
  if (e.target !== e.currentTarget){

    var clickedItem = e.target;
    console.log(clickedItem);
    // FOR DEBUGGING: console.log(typeof(clickedItem.className));

    // If neither the cellX nor cellO class has been added yet, add one of the images
    if (clickedItem.className.search("cellX") === -1 && clickedItem.className.search("cellO") === -1){
      // If the turnCounter is on an even number, place an X, otherwise place an O
      /* FOR DEBUGGING: console.log("turn-counter: " + turnCounter); */
      (turnCounter % 2 === 0) ? (clickedItem.className += " cellX fadeIn") : (clickedItem.className += " cellO fadeIn");
      // Increment the turn counter:
      turnCounter++;
    }
    // Stop propogation of DOM traversal for efficiency:
    e.stopPropagation();
  }

}

// Function that removes all cellX and cellO classes and reset the turnCounter to 0
function resetBoard(e) {
  var cells = document.getElementsByClassName("cell");
  console.log(cells);
  turnCounter = 0;

  // Iterates through array of cells, resetting the styling to remove cellX, cellO, and fadeIn
  for (var i = 0; i < cells.length; i++) {
    cells[i].className = "cell";
  }

}
