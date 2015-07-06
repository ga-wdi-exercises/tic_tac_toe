/*var reset = document.getElementById("reset");
function turnPageRed() {
  document.body.style.backgroundColor = "red";
}
reset.addEventListener("click", turnPageRed);*/
var submitTally = 0;
var userWonGameReset = 0;

function xAndBlank(temporaryPlaceholderVariable, quadrant, actualTextSpace) {
  var temporaryPlaceholderVariable = document.getElementById(quadrant);
  temporaryPlaceholderVariable.addEventListener("click", playX);
  function playX() {
    document.getElementById(actualTextSpace).innerHTML = "X";
    temporaryPlaceholderVariable.removeEventListener("click", playX);
    temporaryPlaceholderVariable.addEventListener("click", playBlank);
  }
  function playBlank() {
    document.getElementById(actualTextSpace).innerHTML = "";
    temporaryPlaceholderVariable.removeEventListener("click", playBlank);
    temporaryPlaceholderVariable.addEventListener("click", playX);
  }
}
function oAndBlank(temporaryPlaceholderVariable, quadrant, actualTextSpace) {
  var temporaryPlaceholderVariable = document.getElementById(quadrant);
  temporaryPlaceholderVariable.addEventListener("click", playO);
  function playO() {
    document.getElementById(actualTextSpace).innerHTML = "O";
    temporaryPlaceholderVariable.removeEventListener("click", playO);
    temporaryPlaceholderVariable.addEventListener("click", playBlank);
  }
  function playBlank() {
    document.getElementById(actualTextSpace).innerHTML = "";
    temporaryPlaceholderVariable.removeEventListener("click", playBlank);
    temporaryPlaceholderVariable.addEventListener("click", playO);
  }
}

function whoseTurn() {
  if(submitTally % 2 === 0) {
    alert("X's turn!")
    xAndBlank("a1", "top_left", "1");
    xAndBlank("a2", "top_middle", "2");
    xAndBlank("a3", "top_right", "3");
    xAndBlank("a4", "middle_left", "4");
    xAndBlank("a5", "middle_middle", "5");
    xAndBlank("a6", "middle_right", "6");
    xAndBlank("a7", "bottom_left", "7");
    xAndBlank("a8", "bottom_middle", "8");
    xAndBlank("a9", "bottom_right", "9");
  }
  else {
    alert("O's turn!")
    oAndBlank("a1", "top_left", "1");
    oAndBlank("a2", "top_middle", "2");
    oAndBlank("a3", "top_right", "3");
    oAndBlank("a4", "middle_left", "4");
    oAndBlank("a5", "middle_middle", "5");
    oAndBlank("a6", "middle_right", "6");
    oAndBlank("a7", "bottom_left", "7");
    oAndBlank("a8", "bottom_middle", "8");
    oAndBlank("a9", "bottom_right", "9");
  }
}
whoseTurn();

function resetBoard() {
  function resetEveryQuadrant(whichDiv, whichH1) {
    document.getElementById(whichDiv).children[0].id = whichH1;
    document.getElementById(whichDiv).children[0].innerHTML = "";
    document.getElementById(whichDiv).style.backgroundColor = "lemonchiffon";
  }
  resetEveryQuadrant("top_left", "1");
  resetEveryQuadrant("top_middle", "2");
  resetEveryQuadrant("top_right", "3");
  resetEveryQuadrant("middle_left", "4");
  resetEveryQuadrant("middle_middle", "5");
  resetEveryQuadrant("middle_right", "6");
  resetEveryQuadrant("bottom_left", "7");
  resetEveryQuadrant("bottom_middle", "8");
  resetEveryQuadrant("bottom_right", "9");
  submitTally = 0;
  if(userWonGameReset !== 1) {
    whoseTurn();
  }
  else {
    userWonGameReset = 0;
  }
}
var reset = document.getElementById("reset");
reset.addEventListener("click", resetBoard);

function submitMove() {
  function inspectEveryQuadrant(findDiv, OneByOneID) {
    if(document.getElementById(OneByOneID) === null) {
      console.log("skipping " + OneByOneID);
    }
    else {
      var lengthyPlaceholder = document.getElementById(OneByOneID);
      if(lengthyPlaceholder.innerHTML === "X" || lengthyPlaceholder.innerHTML === "O") {
        document.getElementById(findDiv).style.backgroundColor = "rgba(255, 250, 150, 1)";
        document.getElementById(OneByOneID).id = "locked";
      }
    }
  }
  inspectEveryQuadrant("top_left", "1");
  inspectEveryQuadrant("top_middle", "2");
  inspectEveryQuadrant("top_right", "3");
  inspectEveryQuadrant("middle_left", "4");
  inspectEveryQuadrant("middle_middle", "5");
  inspectEveryQuadrant("middle_right", "6");
  inspectEveryQuadrant("bottom_left", "7");
  inspectEveryQuadrant("bottom_middle", "8");
  inspectEveryQuadrant("bottom_right", "9");
  submitTally++;
  checkWinner();
  whoseTurn();
  //userWonGameReset = 1; pretty sure I need to remove
}
var winnerTotal = 0;
function methodToCheckWinner(divID) {
  if(document.getElementById(divID).children[0].innerHTML === "X") {
    winnerTotal++;
  }
  if(document.getElementById(divID).children[0].innerHTML === "O") {
    winnerTotal = winnerTotal - 1;
  }
}
function checkEachPossibleWinner(squareOne, squareTwo, squareThree) {
  winnerTotal = 0;
  methodToCheckWinner(squareOne);
  methodToCheckWinner(squareTwo);
  methodToCheckWinner(squareThree);
  if(winnerTotal === 3) {
    alert("X wins! Resetting Board...");
    userWonGameReset = 1;
    resetBoard();
  }
  else if(winnerTotal === -3) {
    alert("O wins! Resetting Board...");
    userWonGameReset = 1;
    resetBoard();
  }
}
function checkWinner() {
  ///////////////////diagonals////////////////////
  checkEachPossibleWinner("top_left", "middle_middle", "bottom_right");
  checkEachPossibleWinner("top_right", "middle_middle", "bottom_left");
  //////////////////horizontal rows///////////////
  checkEachPossibleWinner("top_left", "top_middle", "top_right");
  checkEachPossibleWinner("middle_left", "middle_middle", "middle_right");
  checkEachPossibleWinner("bottom_left", "bottom_middle", "bottom_right");
  /////////////////vertical rows////////////////
  checkEachPossibleWinner("top_left", "middle_left", "bottom_left");
  checkEachPossibleWinner("top_middle", "middle_middle", "bottom_middle");
  checkEachPossibleWinner("top_right", "middle_right", "bottom_right");
}

  /*
  document.getElementById("2").id = "locked";
  document.getElementById("3").id = "locked";
  document.getElementById("4").id = "locked";
  document.getElementById("5").id = "locked";
  document.getElementById("6").id = "locked";
  document.getElementById("7").id = "locked";
  document.getElementById("8").id = "locked";
  document.getElementById("9").id = "locked";
*/
var submit = document.getElementById("submit");
submit.addEventListener("click", submitMove);

/*var a = document.getElementById(quadrant);
a.addEventListener("click", playTopLeftX);*/


/*
var a1 = document.getElementById("top_left");
a1.addEventListener("click", playTopLeftX);
function playTopLeftX() {
  document.getElementById("1").innerHTML = "X";
  a1.removeEventListener("click", playTopLeftX);
  a1.addEventListener("click", playTopLeftO);
}
function playTopLeftO() {
  document.getElementById("1").innerHTML = "O";
  a1.removeEventListener("click", playTopLeftO);
  a1.addEventListener("click", playTopLeftX);
}
*/
