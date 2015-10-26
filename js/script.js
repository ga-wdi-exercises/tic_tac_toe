$(document).ready(startGame);

var currentPlayer = "X";

function startGame(){
  $(".square").on("click", playSquare);
}

function playSquare(){
  var squareHasBeenPlayed = $(this).html();
  if (!squareHasBeenPlayed){
    $(this).html(currentPlayer);
    togglePlayer();
  }
}

function togglePlayer(){
  if (currentPlayer === "X"){
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}
