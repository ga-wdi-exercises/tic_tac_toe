function begin() {
  document.turn = "X";

  (document.turn + " gets first move.");
}

function alertContent(alrt) {
  document.getElementById("alert").innerText = alrt;
}

function nextTurn(square) {
  square.innerText = document.turn;
  nextMove();
}

function nextMove() {
  if (document.turn == "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
  }

}
