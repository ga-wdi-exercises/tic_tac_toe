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

//function runGame
$(document).ready(function(){
  startGame();
})
function runGame(){

giveMessage($(.turn) + " starts the game.");
}

//tell user whose turn it is, winner, etc
//function giveMessage
function giveMessage(){
  $(.messages).text('')
}
