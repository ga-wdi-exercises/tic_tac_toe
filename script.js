$( document ).ready(function() {

var grid = $(".square");
// use boolean value to toggel between X and O
var playerOne = true;
var winCombos = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ];
var playerX = [];
var playerO = [];

for (i = 0; i < grid.length; i++) {
  var square = grid[i];
  $(square).on("click", function () {
    if ($(this).html() === "" && playerOne === true) {
      $(this).html("X");
      //pushes index value to player X array
      playerX.push($(this).index());
      console.log(playerX);
      playerOne = false;
    } else if ($(this).html() === "" && playerOne === false) {
      $(this).html("O");
      // pushes index value to player O array
      playerO.push($(this).index());
      console.log(playerO);
      playerOne = true;
    }
  });
}

// declare some kind of getWinner function that compares player X & player O arrays to winCombos array




























});
