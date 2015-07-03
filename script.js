/* gameBoard array includes all list tags
   used in event listen array to only listen for clicks on game board*/
var gameBoard = document.getElementsByTagName("li");
var counter = 0; /*counter used to determine which mark*/

/* for loop to listen for events on all squares*/
for (var i = 0; i < gameBoard.length; i++) {
  gameBoard[i].addEventListener("click", markSquare);
}


/*function to change square based on element id*/
function markSquare(){
  var clickedSquare = document.getElementById(event.target.id);
  if (clickedSquare.className == "emptySquare"){
    if (counter % 2 === 0){
      /*console.log("mark this X");*/
      clickedSquare.innerHTML = "X";
      clickedSquare.className = "markX";
      document.getElementById("whoseTurn").innerHTML = "Player 2's turn to place an O";
    } else {
      /*console.log("mark this O");*/
      clickedSquare.innerHTML = "O";
      clickedSquare.className = "markO";
      document.getElementById("whoseTurn").innerHTML = "Player 1's turn to place an X";
    }
    counter ++; /*increment counter to alternate marks*/
  } else {
    return; /*don't do anything if square has already been clicked and marked*/
  }
}

document.getElementById("resetButton").addEventListener("click", resetBoard);
function resetBoard(){
  /*console.log("clicked reset");*/
  for (var i = 0; i < gameBoard.length; i++){
    gameBoard[i].className = "emptySquare";
    gameBoard[i].innerHTML = "";
  }
}
