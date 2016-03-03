var box = document.querySelectorAll(".box");

function startGame(){
  document.turn = "X";
  displayMessage(document.turn + " will start.")
}

document.body.onload = startGame();

function displayMessage(msg){
  document.getElementById("message").innerText = msg;
}

function userMove(){
  if (this.innerText == ""){
    this.innerText = document.turn;
    switchPlayer();
  }
  else {
    displayMessage ("Choose a blank spot.")
  }
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

for( var i=0; i< box.length; i++){
  box[i].addEventListener("click", userMove);
}
