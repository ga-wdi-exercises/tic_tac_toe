function startGame (){
  document.turn = "X";
  displayMessage(document.turn + " will start.")
}

function displayMessage (msg){
  document.getElementById("message").innerText = msg;
}

document.body.onload = startGame();
