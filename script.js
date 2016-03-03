function startGame(){
  document.turn = "X";
  displayMessage(document.turn + " will start.")
}

function displayMessage(msg){
  $("message").innerText = msg;
}

document.body.onload = startGame();

function userMove(){
  this.innerText = document.turn;
}

var square = document.querySelectorAll(".box");
for ( var i=0; i< square.length; i++){
  square[i].addEventListener("click", userMove);
}
