player = true;

var startGame = function(){
$("td").click(function() {
//  alert("I was clicked");
//  console.log("this is this "+ ($(this)).html());

if(player){
  ($(this)).addClass("red");
  ($(this)).html("X");
  $(this).unbind("click");

    player = false;
}

else {
  ($(this)).addClass("blue");
  ($(this)).html("O");
  player = true;
  $(this).unbind("click");
}


});
$("#reset").click(function(){
$('td').removeClass();
startGame();

// $('td').removeClass('.blue');
console.log($('td'));
});
//
// if($("td#1") == $("td#2") && $("td#2")== $("td#3") &&
//  $("td#1") == $("td#3") ){
//   alert("Yay! You win the game!");

};
startGame();
//
// $("#1").click(function() {
//   //alert("#1");
// });


/*
var squares = $("#td");
console.log("these are my squares " + squares);


function squares(){
squares.on("click", changeSquare);
}

function changeSquare() {
  alert("I was clicked");
}

squares();
*/
