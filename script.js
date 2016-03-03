//Global variables: change to local later
var gameBoard = $("#gameBoard");
var isO = false;

function playTicTac() {
  gameBoard.on("click", clickSquare);
  $("button").on("click", clearBoard);
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

function clearBoard(event) {
  event.preventDefault();
  for (i = 0; i < 9; i++) {
    $("td").html("");
  }
  isO = false;
  $("h2").html("X's Turn");
}
