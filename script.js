document.addEventListener("click", markSquare);
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
  document.getElementsByClassName("mark0").className = "emptySquare";
  document.getElementsByClassName("markX").className = "emptySquare";
}
