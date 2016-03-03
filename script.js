$(document).ready(function(){

  for (var i = 0; i < 9; i++){
  $(".board").append("<div class=\"cell\" id=\""+i+"cell\" style=\"background-color:Green\"></div>");
}

  // A user should be able to click on different squares to make a move.
  // Every click will alternate between marking an `X` and `O`.
  // Upon marking of an individual cell, use JavaScript to add a class to
  // each cell to display separate colors.
  // A cell should not be able to be replayed once marked.
  // Add a reset button that will clear the contents of the board.
  $(".cell").text("O");
for (var j=0; j<9; j++){
$("#"+j+"cell").click(function(){
$("#"+j+"cell").text("X");
$("#"+j+"cell").css("background-color", "orange");
$("number")
console.log($("#"+j+"cell").text("X"));
})
}

// $(".cell").html("X")
// $(".cell").prepend('<img id="x_image" src="x_image.png" />');




});
