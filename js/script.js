$(document).ready(startGame);

var currentPlayer = "X";

function startGame(){
  $(".square").on("click", playSquare);
  $("#reset").on("click", resetGame);
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

function resetGame() {
  $(".square").html("");
  currentPlayer = "X";
}
