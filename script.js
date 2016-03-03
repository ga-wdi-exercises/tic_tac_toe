
var disp = $("#display")[0]; // Needed to return native DOM object.
var d = disp.getContext("2d");

var TILE_SIZE = 200;

var curPlayer = "X";
var curColor = "rgba(255,0,0,0.25)";

var gameGrid = [[null, null, null],
                [null, null, null],
                [null, null, null]];

d.fillStyle = curColor;
$("#display").on("click", test);

// Draw Grid
// TODO: Math-ify this.
d.beginPath();
d.moveTo(0,200);
d.lineTo(600,200);
d.moveTo(0,400);
d.lineTo(600,400);
d.moveTo(200,0);
d.lineTo(200,600);
d.moveTo(400,0);
d.lineTo(400,600);
d.stroke();


// called by canvas click listener
function test(e){
  var mouse = getDispPos(e);
  if(isValidMove(mouse.x, mouse.y)){ // check if move is valid before doing anything.
    updateGameGrid(mouse.x, mouse.y, curPlayer);
    fillTileAt(mouse.x,mouse.y, curColor);
    toggleTurn();
    var winner = checkWin();
    console.log(winner);
    if (winner != null){console.log(winner + " is the Winner!")}
  }
}

//  returns coordinates of mouse position relative to canvas
function getDispPos(e){
  var rect = disp.getBoundingClientRect(); // TODO: What is this function doing?
  var x = e.clientX - rect.left;
  var y =  e.clientY - rect.top;
  return {x:x, y:y};
}

// Fill the tile with color indicated by canvas pos
// If color = "CLEAR", erase the indicated tile instead.
function fillTileAt(x, y, color){
  var t = pixToGrid(x, y);
  if(color == "CLEAR"){d.clearRect(t.row*TILE_SIZE, t.col*TILE_SIZE, TILE_SIZE-1, TILE_SIZE-1); return;}
  else{
    d.fillStyle = color;
    d.fillRect(t.row*TILE_SIZE, t.col*TILE_SIZE, TILE_SIZE-1, TILE_SIZE-1);
  }
}

// Convert canvas x/y to gameGrid row/col
function pixToGrid(x, y){
  var row = Math.floor(x/TILE_SIZE);
  var col = Math.floor(y/TILE_SIZE);
  return {row:row, col:col};
}

// Updates game grid to value indicated by p, based on canvas coordinates.
function updateGameGrid(x, y, p){
  var t = pixToGrid(x, y);
  gameGrid[t.row][t.col] = p;
}

// Updates player color and indicators
function toggleTurn(){
  if (curPlayer == "X"){ curPlayer = "O"; curColor = "rgba(0,0,255,0.25)";}
  else {curPlayer = "X"; curColor = "rgba(255,0,0,0.25)";}
}

// returns true if canvas coordinates translate to empty grid value.
function isValidMove(x, y){
  var t = pixToGrid(x, y);
  return (gameGrid[t.row][t.col] == null);
}

// Returns player value if a win is found, otherwise return null
function checkWin(){
  if ((gameGrid[0][0] == gameGrid[1][0])&&(gameGrid[1][0] == gameGrid[2][0])){
    return gameGrid[2][0];
  }
  else{return null;}
}
