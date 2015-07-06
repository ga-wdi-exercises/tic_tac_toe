//Board kept as array of 9 elements either undefined, "X" or "O"
var board = new Array(9);
//Turn tracker
var xTurn = true;

//Board squares and restart button
var pos0 = document.getElementById('pos0');
var pos1 = document.getElementById('pos1');
var pos2 = document.getElementById('pos2');
var pos3 = document.getElementById('pos3');
var pos4 = document.getElementById('pos4');
var pos5 = document.getElementById('pos5');
var pos6 = document.getElementById('pos6');
var pos7 = document.getElementById('pos7');
var pos8 = document.getElementById('pos8');
var restart = document.getElementById('restart')

//Place pieces and restart on click
pos0.addEventListener("click", place0);
pos1.addEventListener("click", place1);
pos2.addEventListener("click", place2);
pos3.addEventListener("click", place3);
pos4.addEventListener("click", place4);
pos5.addEventListener("click", place5);
pos6.addEventListener("click", place6);
pos7.addEventListener("click", place7);
pos8.addEventListener("click", place8);
restart.addEventListener("click", clearBoard);

//Should figure a better way to do this. Can't pass arguments with an event listener. This feels clunky but not sure how to fix
function place0(){place(0);}
function place1(){place(1);}
function place2(){place(2);}
function place3(){place(3);}
function place4(){place(4);}
function place5(){place(5);}
function place6(){place(6);}
function place7(){place(7);}
function place8(){place(8);}

//Main game loop. Places piece if space isn't taken. Calls function to check if game is over and updates subheading
function place(pos){
  if (board[pos] === undefined){
    board[pos] = (xTurn?"X":"O");
    drawBoard();
    xTurn = !xTurn;
    result = checkEnd();
    document.getElementById('turn').textContent = (xTurn?"X":"O") +"\'s turn"
    if (result){
      document.getElementById('turn').textContent = result + "!"
      window.alert(result);
      clearBoard();
      }
  }
  else {
    console.log("Spot occupied. Please choose another")
  }
}
//Adds x and o classes after players pick
function drawBoard() {
  for (var i = 0; i < board.length; i++){
    if (board[i] !== undefined){
      var space = document.getElementById('pos' + i);
      space.classList.add((board[i]==="X"?'x':'o'));
      space.textContent = board[i];
    }
  }
}
//Calls seires of helper functions checking for possible wins
function checkEnd(){
  if (verticalWin()) return verticalWin();
  else if (horizontalWin()) return horizontalWin();
  else if (diagonalWin()) return diagonalWin();
  else if (fullBoard()) return fullBoard();
  else {return ""};
}

function verticalWin(){
  for (var i = 0; i < 3; i++){
    if (board[i] !== undefined){
      if (board[i]===board[i + 3] && board[i]===board[i + 6] ) {return board[i] + " wins";}
    }
  }
  return "";

}

function horizontalWin() {
  for (var i = 0; i <= 6; i += 3){
    if (board[i] !== undefined){
      if (board[i]===board[i + 1] && board[i]===board[i + 2] ) {return (board[i] + " wins");}
    }
  }
  return "";
}

function diagonalWin() {
  if (board[4] !== undefined){
    if (board[4]===board[0] && board[4]===board[8] || board[4]===board[2] && board[4]===board[6]){
      return (board[4] + " wins");
    }
  }
  return "";
}

function fullBoard(){
  for (var i = 0; i < 9; i++){
    if (board[i]===undefined){return "";}
  }
  return "Cat's game!";
}
//Reset the game
function clearBoard(){
  board = new Array(9);
  xTurn = true;
  document.getElementById('turn').textContent = (xTurn?"X":"O") +"\'s turn"
  for (var i = 0; i < 9; i++){
    var space = document.getElementById('pos' + i);
    space.classList.remove("x");
    space.classList.remove("o");
    space.textContent = "_";
  }
}
