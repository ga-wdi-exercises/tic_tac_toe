var grid = document.querySelector("#grid");
var whichPlayer = "X"
var numMoves = 0
grid.addEventListener("click", markSquare);



function markSquare(square) {
  if (square.target != square.currentTarget) {
    var clicked = square.target.id;
    playerMove(clicked);
  }
}

function playerMove(clicked) {
    if (document.getElementById(clicked).innerHTML !== ""){
      alert("That square is already marked");
    }
    else if (whichPlayer === "O") {
      //player 2 move
      document.getElementById(clicked).innerHTML = "O";
      document.getElementById(clicked).setAttribute("value", "O");
      whichPlayer = "X";
      checkWinner();
    }
    else {
      //player 1 move
      document.getElementById(clicked).innerHTML = "X";
      whichPlayer = "O";
      checkWinner();
    }
}

function checkWinner() {
  var winningMoves = [".row1", ".row2", ".row3", ".column1", ".column2", ".column3", ".diagonal1", ".diagonal2"];

  for (var i=0; i<winningMoves.length; i++) {
    var combo = document.querySelectorAll(winningMoves[i])
    console.log(combo);
  }

}
