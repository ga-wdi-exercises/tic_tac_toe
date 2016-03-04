//construct a 3x3 board, use for loop
var rows = 3;
var columns = 3;
var $row = $("<div />", {
    class: 'row'
});
var $cell = $("<div />", {
    class: 'cell'
});

// Create grid **********************
$(document).ready(function() {
  //add columns to row
  for (var i = 0; i < columns; i++){
    $row.append($cell.clone());
  }

  //clone the temp row object with the columns to the board
  for (var i = 0; i < rows; i++){
    $("#board").append($row.clone());
  }
//************************************

/*
 //when player clicks on a cell show X
  $(".cell").click(function(){
    $(this.show());
  });
*/

  //something easier...
    //when player clicks on a cell the color changes
      $(".cell").on("click", function(){
        $(this).css("background-color", "white");
      });  //this works!

//when player clicks cell a second time, show O
//keep track of clicks
//no third clicks
//reset button
});

/*
//when player clicks on a cell show X
$(".cell").click(function(){
  $(this.show());
});
*/

//something easier...
//when player clicks on a cell the color changes

//when player clicks cell a second time, show O
//keep track of clicks
//no third clicks
//reset button
