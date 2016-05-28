// $(document).ready(function()

document.onload(runGame();)

function runGame(){
  document.turn = "X"
giveMessage(document.turn + " starts the game.");
}

//tell user whose turn it is, winner, etc
//function giveMessage
function giveMessage(msg){
  document.getElementbyClass("messages").innerhtml = msg;
}
//different players start each move
function switchMove(){
  $(.cell).click(function(){
  (.cell).text = $(.turn)
  //call to switch player
  nextTurn();
})
}
//switch player each turn
function nextTurn(){
  if (document.turn == "X") {
    document.turn == "O";
  } else {
    document.turn == "X";
  }
  giveMessage("Now it's your turn " + document.turn);
}




}


}
