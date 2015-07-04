//Tic-Tac-Toe game//
//Access the p element inside my cells
//Change to "X"
var turnX = function(){
  function changeToX(e) {
    e.target.innerHTML = "<p>X</p>"
  }

  function position(){

  }

  var allCells = document.getElementsByClassName("cell");
  for (var i = 0; i < allCells.length; i++){
    var cellContent = document.getElementsByClassName("cell")[i];
    cellContent.addEventListener("click", changeToX);
  }
}

//Change to O
var turnO = function() {
  function changeToO(e) {
    e.target.innerHTML = "<p>O</p>"
  }

  function position(){

  }

  var allCells = document.getElementsByClassName("cell");
  for (var i = 0; i < allCells.length; i++){
    var cellContent = document.getElementsByClassName("cell")[i];
    cellContent.addEventListener("click", changeToO);
  }
}
turnX();
turnO();
