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
  if (counter % 2 === 0){
    /*console.log("mark this X");*/
    document.getElementById(event.target.id).innerHTML = "X";
    document.getElementById(event.target.id).className = "markX";
  } else {
    /*console.log("mark this O");*/
    document.getElementById(event.target.id).innerHTML = "O";
    document.getElementById(event.target.id).className = "markO";
  }
  counter ++; /*increment counter to alternate marks*/
}

document.getElementById("resetButton").addEventListener("click", resetBoard);
function resetBoard(){
  /*console.log("clicked reset");*/
  for (var i = 0; i < gameBoard.length; i++){
    gameBoard[i].className = "emptySquare";
    gameBoard[i].innerHTML = "";
  }
}
