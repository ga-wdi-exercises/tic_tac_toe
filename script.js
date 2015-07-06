/**
Variables declared
*/
var painted;
var content;
var winningCombination;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squarFIlled = 0;
var w;
var y;

/**
Instanciate arrays
*/
window.onload=function(){
  painted = new Array();
  content = new Array();
  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


  for(var l = 0; l <= 8; l++){
    painted[l] = false;
    content[l]='';
  }
}

/**
Game methods
*/
function canvasClicked(canvasNumber){
  theCanvas = "canvas"+canvasNumber;
  c = document.getElementById(theCanvas); //variable c will now hold the canvas we want, so what is this document.getElementById? It's used in Javascript to access parts of the html page dynamically! See the id attribute we gave on the body? This one will find if there is an id which corresponds to the "theCanvas" variable
  cxt = c.getContext("2d"); //this gives us the context of the canvas. We will use 2d to draw in the x and y coordinates

  if(painted[canvasNumber-1] ==false){ //this condition tells us that the canvas isn't occupied, we should draw on it, and draw we will!
    if(turn%2==0){ //The '%' or modulus operator gives us the remainder of two values. The "turn" value is globally declared every turn made it is incremented. This condition determines whose turn it is now.
      cxt.beginPath(); //this makes sure that we begin drawing, kind of like putting a pencil beside the paper
      cxt.moveTo(10,10); //This moves the imaginary cursor to a specific location in our canvas, always remember the first value is the x coordinate while the next value is the y coordinate
      cxt.lineTo(40,40); //This draws a line! From 10,10 to 40,40, we just drew a diagonal line!
      cxt.moveTo(40,10); //Again, we move the imaginary cursor
      cxt.lineTo(10,40); //Again draw another diagonal line to complete the x
      cxt.stroke(); //This command will now draw the lines
      cxt.closePath(); //Will put away the cursor for us.
      content[canvasNumber-1] = 'X'; //This gives the array content the value of 'X', meaning X just marked this canvas
    }
    else{ //If it isn't X's turn, it's O's turn! Let's draw a circle!
      cxt.beginPath();
      cxt.arc(25,25,20,0,Math.PI*2,true); //Instead of moving to and fro line to line we just use the arc method. The first three variables are x, y, and radius. X and Y will be the center of the circle
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = 'O';
    }
    turn++; //We increment the turn so that we know that next turn would be the other player!
    painted[canvasNumber-1] = true; //We tell that this particular canvas is filled
    squaresFilled++; //We tell that the number of canvasses filled has gone up
    checkForWinners(content[canvasNumber-1]); //Another function! We'll give it the content of the current canvas so we know which player just made a turn

    if(squaresFilled==9){
      alert("THE GAME IS OVER!");
      location.reload(true);
    }
  }
  else{
    alert("THAT SPACE IS ALREADY OCCUPIED WITH YOUR HEART!");
  }
}

function checkForWinners(symbol){
  for(var a = 0; a < winningCombinations.length; a++){
    if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]== symbol&&content[winningCombinations[a][2]]==symbol){
      alert(symbol+ " WON!");
      playAgain();
    }
  }
}

/**

*/
function playAgain(){
  y=confirm("PLAY AGAIN?"); //confirm will show a popup box with the values "OK" or "CANCEL", choosing ok will yield the value "true" to y, otherwise, false.
  if(y==true){
    alert("OKAY! ^^/>");
    location.reload(true); //We reload the page automatically! Yeah, with all that crazy animation at the beginning.
  }
  else{
    alert("SO LONG,SUCKER!");
  }
}
