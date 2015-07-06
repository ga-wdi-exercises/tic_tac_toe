// Requirements:
// 1. user should click on different elements to create a move
// 2. every click alternates between x and o
// 3. when a cell is marked, display a corresponding color
// 4. marked cell can't be undone
// 5. add reset button will clear contents

// Outline:
// 1. listen for a click event on a box
// 2. when click on a box is executed, toggle between marking x and o


var playerMoves = [];
var storePlayerMoves = playerMoves.push();
var getMoves = document.getElementsByClassName('square');

for (var i=0; i<playerMoves.length; i++) {
  square[i].addEventListener('click');
  playerMoves.onclick = function toggleButtonDesign() {
   if (square.className === "square") {
     square.className == "green";
   } else if (square.className === "square") {
     square.className === "blue";
   }
}
//
// if (i % 2 === 0) {
//   square.className == "green";
// } else if (i % 2 !==0) {
//   square.className === "blue";
// }
// }
// square[i].addEventListener('click');
// playerMoves.onclick = function (
//   playerMoves.push
