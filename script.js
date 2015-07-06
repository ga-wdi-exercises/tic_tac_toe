var drawing;
var content;
var winCombos;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var y;

window.onload=function(){
  drawing = new Array();
  content = new Array();
  winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(var l = 0; l <= 8; l=l+1){
  drawing[l] = false;
  content[l]='';
  }
};

function canvasClicked(squareNumber){
  theCanvas = "square"+squareNumber;
  c = document.getElementById(theCanvas);
  cxt = c.getContext("2d");
  if(drawing[squareNumber-1] ===false){
    if(turn%2===0){
      cxt.beginPath();
      cxt.moveTo(10,10);
      cxt.lineTo(90,90);
      cxt.moveTo(90,10);
      cxt.lineTo(10,90);
      cxt.stroke();
      cxt.closePath();
      content[squareNumber-1] = 'X';
    }
    else{
        cxt.beginPath();
        cxt.arc(50,50,40,0,Math.PI*2,true);
        cxt.stroke();
        cxt.closePath();
        content[squareNumber-1] = 'O';
        }
    turn=turn+1;
    drawing[squareNumber-1] = true;
    squaresFilled=squaresFilled+1;
    checkForWinners(content[squareNumber-1]);
    if(squaresFilled===9){
        alert("All the spaces are filled. The game is a draw.");
        location.reload(true);
      }
    }
        else{
            alert("That space already has a mark in it.");
        }
}
function checkForWinners(symbol){
    for(var a=0; a < winCombos.length; a=a+1){
    if(content[winCombos[a][0]]==symbol&&content[winCombos[a][1]]==symbol&&content[winCombos[a][2]]==symbol){
    alert(symbol+ " won!");
    playAgain();
    }
    }
}
function playAgain(){
y=confirm("Would you like to play again?");
    if(y===true){
    location.reload(true);
    }
      else{
        alert("Goodbye!");
      }
}
/*   It's         ,-.
     Shark      ,' /
     Week!    ,'  (
     Ahhh! --'     `----- */
