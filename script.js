//Tic-Tac-Toe game//
//Access the p element inside my cells
//Change to "X"

function changeToX(e) {
  //document.getElementsByClassName("cell")[0].innerHTML = "<p>X</p>";
  e.target.innerHTML = "<p>X</p>"
}

function position(){

}

var allCells = document.getElementsByClassName("cell");
for (var i = 0; i < allCells.length; i++){
  var cellContent = document.getElementsByClassName("cell")[i];
  cellContent.addEventListener("click", changeToX);
}
