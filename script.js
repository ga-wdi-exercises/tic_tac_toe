//Tic-Tac-Toe game//
//Access the p element inside my cells
//Change to "X"

function changeToX() {
  document.getElementsByClassName("cell")[0].innerHTML = "<p>X</p>";
}
var allCells = document.getElementsByClassName("cell");
for (var i = 0; i < allCells.length; i++){
  var cellContent = document.getElementsByClassName("cell")[i];
  cellContent.addEventListener("click", changeToX);
}
