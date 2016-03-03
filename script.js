var gameBoard = $("#gameBoard");
var isO = false;

function playTicTac() {
  gameBoard.on("click", clickSquare);
}

playTicTac();

function clickSquare(event) {
  event.preventDefault();
  if (isO === false) {
    //add X into square when clicked
    event.target.innerHTML = "X";
    isO = true;
  } else if (isO === true) {
    //add O in square when clicked
    event.target.innerHTML = "O";
    isO = false;
  }
}
