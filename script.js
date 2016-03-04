window.onload = startGame;

function startGame() {
  //when clearBoxes is called, clears all 9 boxes.
  for (var i=1; i<=9; i = i+1) {
    clearBoxes(i);
  }
  //by default game starts with "X" moving. will check to see if i can reset that each turn.
  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + " gets to start.");
}

//will display all messages above the table with moves and winner announcement.
function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(td) {
  //if game is already over, will not allow user to make another move.
  if (document.winner != null) {
    setMessage(document.winner + " has already won the game!");
  }
  //if the winner is not yet determined because there are moves left, switch to next users turn.
  else if (td.innerText == "") {
    td.innerText = document.turn;
    switchTurn();
  }
  //if user tries to select box already selected, display message that box is already selected.
  else {
    setMessage("Selection already made in this box.");
  }
}

function switchTurn() {
  if (checkWinner(document.turn)) {
    setMessage(document.turn + " wins!");
    document.winner = document.turn;
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("It's " + document.turn + "'s turn now!");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + "'s turn now!");
  }
}
//check for winner by making sure there are no matching moves in all possible row combinations.
function checkWinner(move) {
  var result = false;
  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)) {
    result = true;
  }
  return result;
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

//stage boxes
function getBox(number) {
  return document.getElementById("box" + number).innerText;
}

//clear boxes
function clearBoxes(number) {
  document.getElementById("box" + number).innerText = "";
}
