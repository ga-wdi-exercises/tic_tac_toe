// $(document).ready(function(){
//
//   var player;
//   var messages = $(".messages");
//   var turn = $(".turn");
//
//   getNextPlayer(turn, player);
//
// //click a cell
// $("td").click(function(){
//   td = $(this);
//   var sign = chooseSign(td);
//     if(!sign) {
//       var pattern = patternForPlayer(player);
//       chooseSign(td, pattern);
//


$(document).ready(function(){
//function runGame
document.onload = runGame();

function runGame(){
$(.turn) = "X"
giveMessage($(.turn) + " starts the game.");
}

//tell user whose turn it is, winner, etc
//function giveMessage
function giveMessage(){
  $(.messages).text('')
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
  if ($(.turn) == "X") {
    $(.turn) == "O";
  } else {
    $(.turn) == "X";
  }
  giveMessage("Now it's your turn " + $(.turn));
}




}


}
