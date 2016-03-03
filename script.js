
var disp = $("#display")[0]; // Needed to return native DOM object.
$("#display").on("click", test);
var d = disp.getContext("2d");

var gameGrid = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]]

d.fillStyle = "rgba(255,0,0,0.5)";

// Draw Grid
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
  fillTileAt(mouse.x,mouse.y);
}

//  returns coordinates of mouse position relative to canvas
function getDispPos(e){
  var rect = disp.getBoundingClientRect(); // TODO: What is this function doing?
  var x = e.clientX - rect.left;
  var y =  e.clientY - rect.top;
  return {x:x, y:y};
}

// File the tile indicated by canvas pos
function fillTileAt(x, y){
  var row = Math.floor(x/200);
  var col = Math.floor(y/200);
  console.log("Tile row: " + row + ", col: " + col);
  d.fillRect(row*200, col*200, 200, 200);
}
