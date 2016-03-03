$(document).ready(function(){

  var player;
  var messages = $(".messages");
  var turn = $(".turn");
  var table = $("table");
  getNextPlayer(turn, player);

//click a cell
$(".cell").click(function(){
  console.log("click");
})

}
