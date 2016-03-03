$(document).ready(function(){
  // set reset button to refresh page when clicked
  $("#reset").click(function() {
    location.reload();
  });
// create and append cell divs to board
  for (var i = 0; i < 9; i++){
  $(".board").append("<div class=\"cell\" id=\""+i+"cell\" style=\"background-color:Green\"></div>");
}

  // Every click will alternate between marking an `X` and `O`.
  // Upon marking of an individual cell, use JavaScript to add a class to
  // each cell to display separate colors.
  // A cell should not be able to be replayed once marked.
  // Add a reset button that will clear the contents of the board.
  // $(".cell").text("O");
  // loop through cells and listen for click event
for (var j=0; j<9; j++){
$("#"+j+"cell").one('click',function(){
  var number = 1 + Math.floor(Math.random() * 6);
  var clickedCell = event.target;
    event.preventDefault();
$(this).text("X"); // display text in clicked cell
$(this).css("background-color", "orange"); //change background color of clicked cells

})
}


});
