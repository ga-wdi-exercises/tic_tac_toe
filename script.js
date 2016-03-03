// User starts with either X or O
// User clicks on a space, and that space shows an X or an O
  // space displays the X or O, depending on which one was currently in effect
  // turn switches to other player
// Play continues until one of two things happens:
    // No spaces remain
    // A player, either X or O, has won
// Reset button at the bottom of the page clears all entries

var squareOne = $("#topRow .left");
var squareTwo = $("#topRow .middle");
var squareThree = $("#topRow .right");
var squareFour = $("#middleRow .left");
var squareFive = $("#middleRow .middle");
var squareSix = $("#middleRow .right");
var squareSeven = $("#bottomRow .left");
var squareEight = $("#bottomRow .middle");
var squareNine = $("#bottomRow .right");
var resetButton = $("button");

var playerTwo = false;

function getWinner () {
if (((squareOne.html() === "X") && (squareTwo.html() === "X") && (squareThree.html() === "X")) ||
    ((squareFour.html() === "X") && (squareFive.html() === "X") && (squareSix.html() === "X"))  ||
    ((squareSeven.html() === "X") && (squareEight.html() === "X") && (squareNine.html() === "X"))  ||
    ((squareOne.html() === "X") && (squareFour.html() === "X") && (squareSeven.html() === "X"))  ||
    ((squareTwo.html() === "X") && (squareFive.html() === "X") && (squareEight.html() === "X"))  ||
    ((squareThree.html() === "X") && (squareSix.html() === "X") && (squareNine.html() === "X"))  ||
    ((squareOne.html() === "X") && (squareFive.html() === "X") && (squareNine.html() === "X"))  ||
    ((squareThree.html() === "X") && (squareFive.html() === "X") && (squareSeven.html() === "X"))
) { alertify.alert("X has triumped!");
} else if (((squareOne.html() === "O") && (squareTwo.html() === "O") && (squareThree.html() === "O")) ||
    ((squareFour.html() === "O") && (squareFive.html() === "O") && (squareSix.html() === "O"))  ||
    ((squareSeven.html() === "O") && (squareEight.html() === "O") && (squareNine.html() === "O"))  ||
    ((squareOne.html() === "O") && (squareFour.html() === "O") && (squareSeven.html() === "O"))  ||
    ((squareTwo.html() === "O") && (squareFive.html() === "O") && (squareEight.html() === "O"))  ||
    ((squareThree.html() === "O") && (squareSix.html() === "O") && (squareNine.html() === "O"))  ||
    ((squareOne.html() === "O") && (squareFive.html() === "O") && (squareNine.html() === "O"))  ||
    ((squareThree.html() === "O") && (squareFive.html() === "O") && (squareSeven.html() === "O"))
  ) { alertify.alert("O stands victorious!");
  }
}

squareOne.click(function(){
if (squareOne.contents().length === 0) {
  if (playerTwo === false){
    squareOne.html("X");
    squareOne.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareOne.html("O");
    squareOne.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

squareTwo.click(function(){
if (squareTwo.contents().length === 0) {
  if (playerTwo === false){
    squareTwo.html("X");
    squareTwo.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareTwo.html("O");
    squareTwo.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

squareThree.click(function(){
if (squareThree.contents().length === 0) {
  if (playerTwo === false){
    squareThree.html("X");
    squareThree.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareThree.html("O");
    squareThree.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

squareFour.click(function(){
if (squareFour.contents().length === 0) {
  if (playerTwo === false){
    squareFour.html("X");
    squareFour.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareFour.html("O");
    squareFour.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

squareFive.click(function(){
if (squareFive.contents().length === 0) {
  if (playerTwo === false){
    squareFive.html("X");
    squareFive.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareFive.html("O");
    squareFive.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

squareSix.click(function(){
if (squareSix.contents().length === 0) {
  if (playerTwo === false){
    squareSix.html("X");
    squareSix.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareSix.html("O");
    squareSix.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

squareSeven.click(function(){
if (squareSeven.contents().length === 0) {
  if (playerTwo === false){
    squareSeven.html("X");
    squareSeven.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareSeven.html("O");
    squareSeven.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

squareEight.click(function(){
if (squareEight.contents().length === 0) {
  if (playerTwo === false){
    squareEight.html("X");
    squareEight.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareEight.html("O");
    squareEight.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

squareNine.click(function(){
if (squareNine.contents().length === 0) {
  if (playerTwo === false){
    squareNine.html("X");
    squareNine.addClass("clicked");
    playerTwo = true;
    getWinner();
    return playerTwo;
  } else if (playerTwo === true) {
    squareNine.html("O");
    squareNine.addClass("clicked");
    playerTwo = false;
    getWinner();
    return playerTwo;
  }
}
});

// Refactor: include reset as a prototype on the constructor

resetButton.click(function(){
$("td").removeClass("clicked");
squareOne.html("");
squareTwo.html("");
squareThree.html("");
squareFour.html("");
squareFive.html("");
squareSix.html("");
squareSeven.html("");
squareEight.html("");
squareNine.html("");
alertify.success("Game Board Cleared");
});
