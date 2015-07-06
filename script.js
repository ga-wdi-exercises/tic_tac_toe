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
    document.getElementById("squareOne").style.color = "blue";
    document.getElementById("squareTwo").style.color = "blue";
    document.getElementById("squareThree").style.color = "blue";
    document.getElementById("squareFour").style.color = "blue";
    document.getElementById("squareFive").style.color = "blue";
    document.getElementById("squareSix").style.color = "blue";
    document.getElementById("squareSeven").style.color = "blue";
    document.getElementById("squareEight").style.color = "blue";
    document.getElementById("squareEight").style.color = "blue";
  } else {
    document.turn = "X";
    document.getElementById("squareOne").style.color = "red";
    document.getElementById("squareTwo").style.color = "red";
    document.getElementById("squareThree").style.color = "red";
    document.getElementById("squareFour").style.color = "red";
    document.getElementById("squareFive").style.color = "red";
    document.getElementById("squareSix").style.color = "red";
    document.getElementById("squareSeven").style.color = "red";
    document.getElementById("squareEight").style.color = "red";
    document.getElementById("squareEight").style.color = "red";
  }
    xOrO(document.turn + " goes now!");
}
