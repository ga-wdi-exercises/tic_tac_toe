
document.box[i].addEventListener("click", markUp, false);
//important to set as global var prevent to call draw, if need be.
var markCount = 0;
var playerSelect = "playerX";

//Establishment of Win Count
function whoWins () {
      var xRecord =[];
      var oRecord =[];
                  //across
      var toWin = [['1','2','3'],['4','5','6'],['7','8','9'],
                  //diagonal
                  ['1','5','9'],['3','5','7'],
                  //down
                  ['1','4','7'],['2','5','8'],['3','6','9']];

  if (toWin === xRecord) {
      alert("Player X wins!")
}
  else if (toWin === oRecord) {
      alert("Player O wins!")
}
  else if (markCount === 9) {
      alert("It's a Cat's Game! Try again.")
}
}

//Sequence of Play Logic [Rather than Loop -> if/then statement]
//Carrying over logic from Choose your own adventure, using != statements
//Important to put invalid first, to trip signal
function playerAction(clickAction) {
    if (document.getElementById(clickAction).innerHTML !== "") {
      alert("Invalid Move!");
    }
    else if (playerSelect === "playerX") {
      document.getElementById(clickAction).innerHTML = "X";
      clickAction.background-color = red;
      playerSelect = "playerO";
      markCount ++;
      whoWins();
    }
    else {
      document.getElementById(clickAction).innerHTML = "O";
      clickAction.background-color = blue;
      playerSelect = "playerX";
      markCount ++;
      whoWins();
    }
}


//Player Actions...Engine missing! Need to add listening event
function markUp(box[i]) {

//???? I get everything BUT events...the point of the exercise. :(
var clickAction = box[i].target.id;
//assign a box[i] via click event //assign new id to not duplicate code;
//Mark counter to determine
playerAction(clickAction);
}




//Reset Board Code
document.getElementById('reset').addEventListener("click", resetGame);

var resetGame = function {
    box[i].innerHTML ="";
    markX = [];
    markO = [];
    playerSelect = "playerX";
    background-color = white;
    markCount = 0;
    }
