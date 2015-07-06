
var x = "x";
var o = "o";
var counter = 0;
var allSquares = document.getElementsByClassName('div.gridSquare');

for(counter = 0; counter < allSquares; i++){
  allSquares[counter].addEventListener("click", changeSquare);
}

function mark(o){
  activeSquare.innerHTML = "<p>O</p>";
  activeSquare.classList.add("x")
  whoseturn.innerHTML = "Place an X";
}
function mark(x){
  activeSquare.innerHTML = "<p>x</p>";
    activeSquare.classList.add("O");
    whoseturn.innerHTML = "Place an O";
}

function changeSquare(event){
  var activeSquare = document.getElementByID(event.target.id)
  if (counter %2 == 0) {
    mark(o);
  }
  else if (counter %2 == 0 || counter %2 ==0.5) {
    mark(x)
  }
}



// winning combinations
if ($("#one").hasClass("o")) && $("#two").hasClass("o")) && $("#three").hasClass("o")) ||
$("#four").hasClass("o")) && $("#five").hasClass("o")) && $("#six").hasClass("o")) ||
$("#seven").hasClass("o")) && $("#eight").hasClass("o")) && $("#nine").hasClass("o")) ||
$("#one").hasClass("o")) && $("#four").hasClass("o")) && $("#seven").hasClass("o")) ||
$("#two").hasClass("o")) && $("#five").hasClass("o")) && $("#eight").hasClass("o")) ||
$("#three").hasClass("o")) && $("#six").hasClass("o")) && $("#nine").hasClass("o")) ||
$("#one").hasClass("o")) && $("#five").hasClass("o")) && $("#nine").hasClass("o")) ||
$("#three").hasClass("o")) && $("#five").hasClass("o")) && $("#seven").hasClass("o")) {
  alert('Player 1 has won the game!')
}
else if ($("#one").hasClass("x")) && $("#two").hasClass("x")) && $("#three").hasClass("x")) ||
$("#four").hasClass("x")) && $("#five").hasClass("x")) && $("#six").hasClass("x")) ||
$("#seven").hasClass("x")) && $("#eight").hasClass("x")) && $("#nine").hasClass("x")) ||
$("#one").hasClass("x")) && $("#four").hasClass("x")) && $("#seven").hasClass("x")) ||
$("#two").hasClass("x")) && $("#five").hasClass("x")) && $("#eight").hasClass("x")) ||
$("#three").hasClass("x")) && $("#six").hasClass("x")) && $("#nine").hasClass("x")) ||
$("#one").hasClass("x")) && $("#five").hasClass("x")) && $("#nine").hasClass("x")) ||
$("#three").hasClass("x")) && $("#five").hasClass("x")) && $("#seven").hasClass("x")) {
  alert('Player 1 has won the game!')
}
elseif (count = 9) {
  alert("Its a tie!")
}
// Let's play Noughts and Crosses!
function start {
  alert("Let's start! \n Player 1 is 'X' \n Player 2 is 'O'")
}
// Player 1 select a square - square marks X
document.getElementsByClassName('div.gridSquare').onclick = markX;
function markX() {
  document.getElementsByClassName('div.gridSquare').style.backgroundColor = 'yellow';
}
// Player 2 select a square - square marks O
/* document.getElementsByClassName('gridSquare').onclick = markO;
 function markX() {
  document.getElementsByClassName('gridSquare').style.backgroundColor = 'yellow';
} */
// Play alternating until someone creates a winning combination
function play ({
  if (counter %2 == 0){
    markO
  }
  else if (counter %2 !== 0){
    markX
  }
  else start;
  counter++
}
