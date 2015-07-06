//Tic-Tac-Toe game//
// var button = document.getElementsByTagName("button")[0];
// var buttonText = document.getElementsByClassName("turnSwitchBtn")[0].innerHTML;

var allCells = document.getElementsByTagName("div");
var counter = 0;
var whoseturn = document.getElementsByClassName("whoseturn")[0]

//Add click event listener to all cells
for (var i = 0; i < allCells.length; i++){
  allCells[i].addEventListener("click", changeValue);
}

function changeValue(event){
  var activeSquare = document.getElementById(event.target.id);
  if (activeSquare.className == "cell") {
    if(counter % 2 === 0){
      activeSquare.innerHTML = "<p>X</p>";
      activeSquare.classList.add("ex")
      whoseturn.innerHTML = "Place an O"
    } else {
      activeSquare.innerHTML = "<p>O</p>";
      activeSquare.classList.add("O")
      whoseturn.innerHTML = "Place an X"
    }

    counter ++;
  } else {
    return;
  }
}

var button = document.getElementsByClassName("reset")[0];
button.addEventListener("click",resetCells);

function resetCells(){
  for (var j = 0; j < allCells.length; j++){
    allCells[j].innerHTML = "";
    allCells[j].setAttribute("class", "cell")
  }
}
