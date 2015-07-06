function clearBoard(){
for (var i = 1; i < 10; i ++) {
document.getElementsByClassName("grid-element").className = "white"
}
}

var clearBoardListener = document.getElementById("clear");
clearBoardListener.addEventListener("click", clearBoard)


var winnerListener = document.getElementsByClassName("grid-element");
document.getElementById("Box 1").className = "yellow"

var


var gameRecord = [null];
function getWinner() {
  if (gameRecord.end === "X") {
  moves.push("O");
  moves.push("X");
}
}

function colorIt(){
  var x = document.getElementsByClassName("grid-element");
    if (moves.end() === 'X'){
        x.style.backgroundColor = "black";
        else x.style.backgroundColor = "red";
    }
}

var box1 = document.getElementById("Box 1");
box1.addEventListener("click", getWinner);
box1.addEventListener("click", colorIt);

var box2 = document.getElementById("Box 2")
box2.addEventListener("click", getWinner);
box2.addEventListener("click", colorIt);

var box3 = document.getElementById("Box 3")
box3.addEventListener("click", getWinner);
box3.addEventListener("click", colorIt);

var box4 = document.getElementById("Box 4")
box4.addEventListener("click", getWinner);
box4.addEventListener("click", colorIt);

var box5 = document.getElementById("Box 5")
box5.addEventListener("click", getWinner);
box5.addEventListener("click", colorIt);

var box6 = document.getElementById("Box 6")
box6.addEventListener("click", getWinner);
box6.addEventListener("click", colorIt);

var box7 = document.getElementById("Box 7")
box7.addEventListener("click", getWinner);
box7.addEventListener("click", colorIt);

var box8 = document.getElementById("Box 8")
box8.addEventListener("click", getWinner);
box8.addEventListener("click", colorIt);

var box9 = document.getElementById("Box 9")
box9.addEventListener("click", getWinner);
box9.addEventListener("click", colorIt);
