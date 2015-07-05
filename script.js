

//**********  FRONT  *************

var squares = document.getElementsByClassName("clear");

var reset_board = document.getElementsByTagName("button");

var show_turn = document.getElementById("turn");

var title = document.getElementsByTagName("h1");


  // Click Event for Button
reset_board[0].addEventListener("click",clearBoard);


  // Click Event for Squares
for(var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", playerMove);
}


function clearBoard() {

  for(var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = " ";  // In case square is left empty
    squares[i].removeChild(squares[i].firstChild);  // Remove innherHTML from playerMove
    squares[i].addEventListener("click", playerMove);  //  Re-add eventListener
    squares[i].className = "clear";  //  Reset classes to just clear

  }

}

// Global var to switch X to O
var XO = "X";

function playerMove(ID) {
  var el = document.getElementById(this.id);  // 'This' translates down from clickEvent, this.id grabs id # for square clicked on

  el.innerHTML = "<p>" + XO + "</p>";
  el.removeEventListener("click",playerMove);

  if (XO === "X") {
    XO = "O";
    el.className += " x_color";  // Turns on color for XO
    turn.innerHTML = "O's turn"; // Designates turn
    title[0].className = "x_color"; // Changes h1 color
    turn.className = "o_color"; // Changes color for h2

  } else if (XO === "O") {
    XO = "X";
    turn.innerHTML = "X's turn"
    el.className += " o_color";
    title[0].className = "o_color";
    turn.className = "x_color";
  }
  check_board(); //  Checks for winner.  Need to figure out for a tie.  Make DRYer, if possible.
}


//********* BACK ****************




function check_board() {

  var x = "<p>X</p>";

  var o = "<p>O</p>";

  if (squares[0].innerHTML === x && squares[1].innerHTML === x && squares[2].innerHTML === x ||
  squares[3].innerHTML === x && squares[4].innerHTML === x && squares[5].innerHTML === x ||
  squares[6].innerHTML === x && squares[7].innerHTML === x && squares[8].innerHTML === x ||
  squares[0].innerHTML === x && squares[3].innerHTML === x && squares[6].innerHTML === x ||
  squares[1].innerHTML === x && squares[4].innerHTML === x && squares[7].innerHTML === x ||
  squares[2].innerHTML === x && squares[5].innerHTML === x && squares[8].innerHTML === x ||
  squares[0].innerHTML === x && squares[4].innerHTML === x && squares[8].innerHTML === x ||
  squares[6].innerHTML === x && squares[4].innerHTML === x && squares[2].innerHTML === x)
  {
    alert("X wins!!! And is the new Champion of the Universe!!!!");

  };

  if (squares[0].innerHTML === o && squares[1].innerHTML === o && squares[2].innerHTML === o ||
  squares[3].innerHTML === o && squares[4].innerHTML === o && squares[5].innerHTML === o ||
  squares[6].innerHTML === o && squares[7].innerHTML === o && squares[8].innerHTML === o ||
  squares[0].innerHTML === o && squares[3].innerHTML === o && squares[6].innerHTML === o ||
  squares[1].innerHTML === o && squares[4].innerHTML === o && squares[7].innerHTML === o ||
  squares[2].innerHTML === o && squares[5].innerHTML === o && squares[8].innerHTML === o ||
  squares[0].innerHTML === o && squares[4].innerHTML === o && squares[8].innerHTML === o ||
  squares[6].innerHTML === o && squares[4].innerHTML === o && squares[2].innerHTML === o)
  {
    alert("O wins and is still the Champion of the Universe!!!!");

  };

  // if (squares[0].innerHTML === x || o && squares[1].innerHTML === x || o && squares[2].innerHTML === x || o &&
  // squares[3].innerHTML === x || o && squares[4].innerHTML === x || o && squares[5].innerHTML === x || o &&
  // squares[6].innerHTML === x || o && squares[7].innerHTML === x || o && squares[8].innerHTML === x || o) {
  //   alert("Tie");
  // };
  // Couldn't get working.

}
