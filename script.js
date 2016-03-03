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



  var squareOne = $("#topRow .left");
  var squareTwo = $("#topRow .middle");
  var squareThree = $("#topRow .right");
  var squareFour = $("#middleRow .left");
  var squareFive = $("#middleRow .middle");
  var squareSix = $("#middleRow .right");
  var squareSeven = $("#bottomRow .left");
  var squareEight = $("#bottomRow .middle");
  var squareNine = $("#bottomRow .right");

  var playerTwo = false;

squareOne.click(function(){
  if (squareOne.contents().length === 0) {
    if (playerTwo === false){
      squareOne.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareOne.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareTwo.click(function(){
  if (squareTwo.contents().length === 0) {
    if (playerTwo === false){
      squareTwo.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareTwo.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareThree.click(function(){
  if (squareThree.contents().length === 0) {
    if (playerTwo === false){
      squareThree.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareThree.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareFour.click(function(){
  if (squareFour.contents().length === 0) {
    if (playerTwo === false){
      squareFour.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareFour.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareFive.click(function(){
  if (squareFive.contents().length === 0) {
    if (playerTwo === false){
      squareFive.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareFive.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareSix.click(function(){
  if (squareSix.contents().length === 0) {
    if (playerTwo === false){
      squareSix.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareSix.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareSeven.click(function(){
  if (squareSeven.contents().length === 0) {
    if (playerTwo === false){
      squareSeven.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareSeven.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareSeven.click(function(){
  if (squareSeven.contents().length === 0) {
    if (playerTwo === false){
      squareSeven.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareSeven.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareEight.click(function(){
  if (squareEight.contents().length === 0) {
    if (playerTwo === false){
      squareEight.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareEight.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});

squareNine.click(function(){
  if (squareNine.contents().length === 0) {
    if (playerTwo === false){
      squareNine.html("X");
      playerTwo = true;
      return playerTwo;
    } else if (playerTwo === true) {
      squareNine.html("O");
      playerTwo = false;
      return playerTwo;
    }
  }
});
