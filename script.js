var gameBoard = document.getElementsByTagName("li");

for (var i = 0; i < gameBoard.length; i++) {
  gameBoard[i].addEventListener("click", markSquare);
}
var counter = 0;
function markSquare(){
  if (counter % 2 === 0){
    /*console.log("mark this X");*/
    document.getElementById(event.target.id).innerHTML = "X";
    document.getElementById(event.target.id).className = "markX";
  } else {
    /*console.log("mark this O");*/
    document.getElementById(event.target.id).innerHTML = "O";
    document.getElementById(event.target.id).className = "markO";
  }
  counter ++;

}

document.getElementById("resetButton").addEventListener("click", resetBoard);
function resetBoard(){
  console.log("clicked reset");
  for (var i = 0; i < gameBoard.length; i++){
    gameBoard[i].className = "emptySquare";
    gameBoard[i].innerHTML = "";
  }
}
