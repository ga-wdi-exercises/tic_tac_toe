
var disp = $("#display")[0]; // Needed to return native DOM object.
$("#display").on("click", test);
var d = disp.getContext("2d");

var TILE_SIZE = 200;

var curPlayer = "X";
var curColor = "rgba(255,0,0,0.5)"

d.fillStyle = curColor;

var gameGrid = [[null, null, null],
                [null, null, null],
                [null, null, null]]

// Draw Grid
// TODO: Mathify this.
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

  updateGameGrid(mouse.x, mouse.y, curPlayer);
  fillTileAt(mouse.x,mouse.y, curColor);
  toggleTurn();
}

//  returns coordinates of mouse position relative to canvas
function getDispPos(e){
  var rect = disp.getBoundingClientRect(); // TODO: What is this function doing?
  var x = e.clientX - rect.left;
  var y =  e.clientY - rect.top;
  return {x:x, y:y};
}

// Fill the tile with color indicated by canvas pos
function fillTileAt(x, y, color){
  var t = pixToGrid(x, y);
  d.fillStyle = color;
  d.fillRect(t.row*TILE_SIZE, t.col*TILE_SIZE, TILE_SIZE-1, TILE_SIZE-1);
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
  if (curPlayer == "X"){ curPlayer = "O"; curColor = "rgba(0,0,255,0.5)";}
  else {curPlayer = "X"; curColor = "rgba(255,0,0,0.5)";}
}
