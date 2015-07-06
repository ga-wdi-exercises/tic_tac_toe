function begin() {
  document.turn = "X";

  xOrO(document.turn + " gets first move.");
}

function xOrO(xo) {
  document.getElementById("message").innerText = xo;
}

function nextTurn(square) {
  if (square.innerText == "") {
  square.innerText = document.turn;
  nextMove();
} else {
    xOrO("Choose another square, jerk!");
  }
}

function nextMove() {
  if (document.turn == "X") {
    document.turn = "O";
  } else {
    document.turn = "X";
  }
    xOrO(document.turn + " goes now!");
}

function changeColor(square) {
  square.style.backgroundColor = "blue";
}
