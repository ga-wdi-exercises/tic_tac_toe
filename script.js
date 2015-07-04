//Tic-Tac-Toe game//
// var button = document.getElementsByTagName("button")[0];
// var buttonText = document.getElementsByClassName("turnSwitchBtn")[0].innerHTML;

var allCells = document.getElementsByTagName("div");
var counter = 0;

//Add click event listener to all cells
for (var i = 0; i < allCells.length; i++){
  allCells[i].addEventListener("click", changeValue);
}

function changeValue(event){
  var activeSquare = document.getElementById(event.target.id);
  if (activeSquare.className == "cell") {
    if(counter % 2 === 0){
      activeSquare.innerHTML = "<p>X</p>";
    } else {
      activeSquare.innerHTML = "<p>O</p>";
    }

    counter ++;
  } else {
    return;
  }
}
