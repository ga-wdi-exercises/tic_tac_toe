// var gameBoard = ["topleft", "topmid", "topright", "midleft", "midmid", "midright", "botleft", "botmid", "botright"];

// gameBoard.addEventListener("click", xOrO, false);
//
// function xOrO () {
//     for(i = 0; i < gameBoard.length; i++) {
//       if (i === (i % 2 === 1)) {
//         return ("X");
//       }
//       else {
//         return ("O")
//       }
// }
//got hint to create a turn counter instead to track turn value

//comment out everthing and start over

var board = document.getElementsByClassName("gameBoard");
var turn = 0;

//While there are empty squares on the board, make them clickable.  When one is clicked, call the xOrO function.
for (var i = 0; i < board.length; i++) {
  var squares = board.children[i];
  squares.addEventListener("click", xOrO, false);
}

//xOrO should recogznize when a square is clicked (e.target.id).  if turn is odd, should be an X, if turn is even, then an O.  turn should increment by one after every click.
function xOrO(e) {
  // if (e.target !== e.currentTarget) {
  //   var squareChoice = e.tartget.id;
  // }
  // e.stopPropagation();

  var squareChoice = e.target.id;

  if(squareChoice == squares) { //if squareChoice (if the square that is picked is from within the gameBoard class or board variable, then count turns)
    if(turn % 2 === 0) {
      squareChoice.innerHTML = "0";
      alert("Next move is O!")
    }
    else {
      squareChoice.innerHTML = "X";
      alert("Next move is X!")
    }
    turn++
  }
}
