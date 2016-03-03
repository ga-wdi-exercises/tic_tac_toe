var gameBoard = $("#gameBoard");

function playTicTac() {
  gameBoard.on("click", clickSquare);
}

playTicTac();

function clickSquare(event) {
  event.preventDefault();
  console.log("I was clicked!");
}
