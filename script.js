console.log("script linked!");

document.turn = "X";

function startGame() {
}

setMessage(document.turn + " " + " U Go first");

function setMessage(msg) {

document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  if(square.innerText == ""){
    square.innerText = document.turn;
    switchTurn();
  } else {
    setMessage("square already used");
  }

}

function switchTurn() {
  if(document.turn == "X"){
    document.turn = "O";
  } else {
    document.turn = "X";
  }

}
