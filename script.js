//Global variables: change to local later
var isO = false;

function playTicTac() {
  var gameBoard = $("#gameBoard");
  gameBoard.on("click", clickSquare);
  $("button").on("click", clearBoard);
}

var allSquares = $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine");

playTicTac();

function clickSquare(event) {
  event.preventDefault();

  var colLeft = $("#one, #four, #seven");
  var colMid = $("#two, #five, #eight");
  var colRight = $("#three, #six, #nine");
  var rowTop = $("#one, #two, #three");
  var rowMid = $("#four, #five, #six");
  var rowBot = $("#seven, #eight, #nine");
  var diagOne = $("#one, #five, #nine");
  var diagTwo = $("#three, #five, #seven");

  if (isO === false) {
    //add X into square when clicked
    event.target.innerHTML = "X";
    event.target.setAttribute("class", "xs");
    isO = true;
    $("h2").html("O's Turn");
  } else if (isO === true) {
    //add O in square when clicked
    event.target.innerHTML = "O";
    event.target.setAttribute("class", "os");
    isO = false;
    $("h2").html("X's Turn");
  }
  getWin(colLeft);
  getWin(colMid);
  getWin(colRight);
  getWin(rowTop);
  getWin(rowMid);
  getWin(rowBot);
  getWin(diagOne);
  getWin(diagTwo);
}

function clearBoard(event) {
  event.preventDefault();
  for (i = 0; i < 9; i++) {
    $("td").html("");
  }
  isO = false;
  $("h2").html("X's Turn")
        .removeClass("winner");
}

function getWin(squares) {
  if (squares.eq(0).html() !== "" && squares.eq(0).html() == squares.eq(1).html() && squares.eq(0).html() == squares.eq(2).html()) {
    $("h2").html(squares.eq(0).html() + " is the winner!")
          .addClass("winner");
  }
}
