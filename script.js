window.onload = startGame;

function startGame(){
  document.turn = "X";
  setMessage(document.turn + " gets to start.");
}

function setMessage(msg){
  document.getElementById("message").innerText = msg;
}

function nextMove(td){
  td.innerText = document.turn;
  switchTurn();
}

function switchTurn(){
  if (document.turn == "X"){
    document.turn = "O";
  }
  else {
    document.turn = "X";
  }

setMessage("It's " + document.turn + "'s turn now!'")

}
