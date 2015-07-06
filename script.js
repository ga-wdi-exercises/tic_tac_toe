var boxes = document.getElementsByClassName("box");
var boxNum = 2;

for (var i=0; i<boxes.length; i++) {
  boxes[i].addEventListener("click", checkMark);
}

function checkMark(event) {
  if (boxNum % 2 === 0){
    event.target.innerHTML = "X";
  } else {
    event.target.innerHTML = "O";
  }
  boxNum += 1;
} else {
  return "Next Click!"
}


document.getElementById("reset").addEventListener("click", resetTheBoard);
function resetTheBoard(event) {
  for (var i=0; i<boxes.length; i++) {
    boxes[i].onclick = ""
  }
}
