var grid = document.querySelector("#grid");
var whichPlayer = "X"
grid.addEventListener("click", markSquare);

function markSquare(square) {
  if (square.target != square.currentTarget) {
    var clicked = square.target.id;
    playerMove(clicked);
  }
}

function playerMove(clicked) {
    if (whichPlayer === "O") {
      //player 2 move
      document.getElementById(clicked).innerHTML = "O";
      whichPlayer = "X";
    }
    else {
      //player 1 move
      document.getElementById(clicked).innerHTML = "X";
      whichPlayer = "O";
    }
}
