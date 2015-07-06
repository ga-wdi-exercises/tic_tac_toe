function isValid(btn) {
  return btn.innerText.length == 0;
}

function checkForWinner (squares, players, currentTurn) {
  if (squares [0].innerText == players[currentTurn] &&
      squares [1].innerText == players[currentTurn] &&
      squares [2].innerText == players[currentTurn]) {
      return true;
  }else if (squares [3].innerText == players[currentTurn] &&
      squares [4].innerText == players[currentTurn] &&
      squares [5].innerText == players[currentTurn]){
      return true;
  }else if (squares [6].innerText == players[currentTurn] &&
      squares [7].innerText == players[currentTurn] &&
      squares [8].innerText == players[currentTurn]){
      return true;
  }else if (squares [0].innerText == players[currentTurn] &&
      squares [3].innerText == players[currentTurn] &&
      squares [6].innerText == players[currentTurn]) {
      return true;
  }else if (squares [1].innerText == players[currentTurn] &&
      squares [4].innerText == players[currentTurn] &&
      squares [7].innerText == players[currentTurn]) {
      return true;
  }else if (squares [2].innerText == players[currentTurn] &&
      squares [5].innerText == players[currentTurn] &&
      squares [8].innerText == players[currentTurn]) {
      return true;
  }else if (squares [0].innerText == players[currentTurn] &&
      squares [4].innerText == players[currentTurn] &&
      squares [8].innerText == players[currentTurn]) {
      return true;
  }else if (squares [2].innerText == players[currentTurn] &&
      squares [4].innerText == players[currentTurn] &&
      squares [6].innerText == players[currentTurn]) {
      return true;
  }
}

function setMark(btn, mark) {
  btn.innerText = mark;
}

function isBoardFull(squares) {
  for (var i = 0, i < squares.length; i++)
  if (squares.innerText == 0){
    return false;
  }else {
    return true;
  }
}

function main() {
  var squares = document.querySelectorAll(".game button");
  var players = ["X", "o"];
  var currentTurn = 0;
  var isGameOver = false;
  var display = document.querySelector(".messages");

  for (var i =0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      if (isGameOver)
        return;

      if (!isValid(this)) {
        display.setMessage("Invalid move");
      } else {
        setMark(this, players [currentTurn]);

        isGameOver = checkForWinner (squares, players, currentTurn);

        // Game is over (someone won)
        if (isGameOver) {
          display.setMessage("Player " + players[currentTurn] + " won!");
        }
        // Game is over (draw)
        if (isBoardFull(squares)) {
          display.setMessage("Draw!");
          return;
        }
        //Game is not over yet. Continue playing
        currentTurn++;
        currentTurn = currentTurn % 2;

        display.setMessage("Player " + players[currentTurn] + " move");
      }
    })
  }
}

main();
