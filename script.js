var square = document.querySelectorAll(".box");

function startGame(){
  document.turn = "X";
  displayMessage(document.turn + " will start.")
}

document.body.onload = startGame();

function displayMessage(msg){
  document.getElementById("message").innerText = msg;
}

function userMove(){
  this.innerText = document.turn;
 switchPlayer();
}

function switchPlayer(){
  if (document.turn == "X"){
    document.turn = "O"
  }
  else
  {
    document.turn = "X"
  }
  displayMessage ("It's " + document.turn + "'s turn!")
}

for( var i=0; i< square.length; i++){
  square[i].addEventListener("click", userMove);
}
