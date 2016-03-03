//sets isO to false so first click is an X, next click an O, then an X, etc.
var isO = false;
var h2 = $("h2");

//function containing the events to play the game
function playTicTac() {
  var gameBoard = $("#gameBoard");
  gameBoard.on("click", clickSquare);
  $("button").on("click", clearBoard);
  h2.addClass("xs");
}
playTicTac();

//variable to gather all of the squares in an array
var allSquares = $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine");

function clickSquare(event) {
  event.preventDefault();
  //variables that are arrays of potential winning locations. when all three values in the array 1) have a value and 2) have matching values, then that value is the winner!
  //with more time, I would like to refactor these variables into an object.
  var colLeft = $("#one, #four, #seven");
  var colMid = $("#two, #five, #eight");
  var colRight = $("#three, #six, #nine");
  var rowTop = $("#one, #two, #three");
  var rowMid = $("#four, #five, #six");
  var rowBot = $("#seven, #eight, #nine");
  var diagOne = $("#one, #five, #nine");
  var diagTwo = $("#three, #five, #seven");

  //when square is clicked, enter an X or O.
  if (isO === false) {
    //add X into square when clicked
    event.target.innerHTML = "X";
    event.target.setAttribute("class", "xs");
    isO = true;
    h2.removeClass("xs");
    h2.addClass("os");
    h2.html("O's Turn");
  } else if (isO === true) {
    //add O in square when clicked
    event.target.innerHTML = "O";
    event.target.setAttribute("class", "os");
    isO = false;
    h2.removeClass("os");
    h2.addClass("xs");
    h2.html("X's Turn");
  }

  //Check to see if that X or O has any matches that would declare a winner.
  //With more time, I would like to refactor this into an object.
  getWin(colLeft);
  getWin(colMid);
  getWin(colRight);
  getWin(rowTop);
  getWin(rowMid);
  getWin(rowBot);
  getWin(diagOne);
  getWin(diagTwo);
}

//when reset game button is clicked, remove all of the values from the squares and reset that state of the game.
function clearBoard(event) {
  event.preventDefault();
  for (i = 0; i < 9; i++) {
    $("td").html("");
  }
  isO = false;
  h2.html("X's Turn")
        .removeClass("winner");
}

//When all three values in the array 1) have a value and 2) have matching values, then that value is the winner!
function getWin(squares) {
  if (squares.eq(0).html() !== "" && squares.eq(0).html() == squares.eq(1).html() && squares.eq(0).html() == squares.eq(2).html()) {
    h2.html(squares.eq(0).html() + " is the winner!")
          .removeClass("xs")
          .removeClass("os")
          .addClass("winner");
  }
}
