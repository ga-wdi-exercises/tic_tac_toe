// User starts with either X or O
// User clicks on a space, and that space shows an X or an O
  // space displays the X or O, depending on which one was currently in effect
  // turn switches to other player
// Play continues until one of two things happens:
    // No spaces remain
    // A player, either X or O, has won
// Reset button at the bottom of the page clears all entries

  ////////////////
 // Pseudocode //
////////////////

// X will always go first
// The first player will click on a square in the table
  // the square will display an X
  // the turn will switch to the next player

$(document).ready(function(){

  var squareOne = new Square ($("#topRow .left"));
  var squareTwo = new Square ($("#topRow .middle"));
  var squareThree = new Square ($("#topRow .right"));
  var squareFour = new Square ($("#middleRow .left"));
  var squareFive = new Square ($("#middleRow .middle"));
  var squareSix = new Square ($("#middleRow .right"));
  var squareSeven = new Square ($("#bottomRow .left"));
  var squareEight = new Square ($("#bottomRow .middle"));
  var squareNine = new Square ($("#bottomRow .right"));

  var playerTwo = false;

  function Square (element) {
    this.element = element;
  }

  Square.prototype.selectSquare = function() {
    var square = this;
    if (square.contents().length === 0) {
      if (playerTwo === false){
        square.html("X");
        playerTwo = true;
        return playerTwo;
      } else if (playerTwo === true) {
        square.html("O");
        playerTwo = false;
        return playerTwo;
      }
    }
  };

  squareOne.on("click" , squareOne.selectSquare(event));

});

// squareOne.click(function(){
//   if (squareOne.contents().length === 0) {
//     if (playerTwo === false){
//       squareOne.html("X");
//       playerTwo = true;
//       return playerTwo;
//     } else if (playerTwo === true) {
//       squareOne.html("O");
//       playerTwo = false;
//       return playerTwo;
//     }
//   }
// });
//
// squareTwo.click(function(){
//   if (squareTwo.contents().length === 0) {
//     if (playerTwo === false){
//       squareTwo.html("X");
//       playerTwo = true;
//       return playerTwo;
//     } else if (playerTwo === true) {
//       squareTwo.html("O");
//       playerTwo = false;
//       return playerTwo;
//     }
//   }
// });
//
// squareThree.click(function(){
//   if (squareThree.contents().length === 0) {
//     if (playerTwo === false){
//       squareThree.html("X");
//       playerTwo = true;
//       return playerTwo;
//     } else if (playerTwo === true) {
//       squareThree.html("O");
//       playerTwo = false;
//       return playerTwo;
//     }
//   }
// });
//
// squareFour.click(function(){
//   if (squareFour.contents().length === 0) {
//     if (playerTwo === false){
//       squareFour.html("X");
//       playerTwo = true;
//       return playerTwo;
//     } else if (playerTwo === true) {
//       squareFour.html("O");
//       playerTwo = false;
//       return playerTwo;
//     }
//   }
// });
