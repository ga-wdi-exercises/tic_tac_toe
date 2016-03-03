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
    $("h2").html("O's Turn");
  } else if (isO === true) {
    //add O in square when clicked
    event.target.innerHTML = "O";
    isO = false;
    $("h2").html("X's Turn");
  }
}
