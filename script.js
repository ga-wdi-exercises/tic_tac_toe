// function defs --------------------------------------------
var ttt_array = [ [],[],[] ];
var play = true;

function Player (name, turn, token){
  this.name = name;
  this.turn = turn;
  this.token = token;
}

function updateTurn(player_current, player_other){
  player_current.turn = false;
  player_other.turn = true;
}

function addImage(event) {
  if (play){
    var image = document.createElement("img");
    if(player1.turn === true){
      image.src = player1.token;
      updateTttArray(this.id, player1.name);
      play = checkForWinner();
      updateTurn(player1, player2);
    }
    else if(player2.turn === true) {
      image.src = player2.token;
      updateTttArray(this.id, player2.name);
      play = checkForWinner();
      updateTurn(player2, player1);
    }
    this.appendChild(image);
  }

}

function updateTttArray(id, playerName){
  switch(id) {
    case "top_left":
      ttt_array[0][0] = playerName;
      break;
    case "top_center":
      ttt_array[1][0] = playerName;
      break;
    case "top_right":
      ttt_array[2][0] = playerName;
      break;
    case "middle_left":
      ttt_array[0][1] = playerName;
      break;
    case "middle_center":
      ttt_array[1][1] = playerName;
      break;
    case "middle_right":
      ttt_array[2][1] = playerName;
      break;
    case "bottom_left":
      ttt_array[0][2] = playerName;
      break;
    case "bottom_center":
      ttt_array[1][2] = playerName;
      break;
    case "bottom_right":
      ttt_array[2][2] = playerName;
      break;
  }

}

function lineNotNull(val1, val2, val3){
  if(val1 == undefined || val2 == undefined || val3 == undefined){
    return false;
  }
  return true;
}

function displayWinner(id1, id2, id3, player_token){
  var invert_string = "invert_" + player_token.token;
  console.log(invert_string);
  //document.getElementById(id1).childNodes[0].src = player_token.token;

}

function checkForWinner(){
  //check rows for win
  if((ttt_array[0][0] === ttt_array[1][0]) && (ttt_array[0][0] === ttt_array[2][0]) && lineNotNull(ttt_array[0][0], ttt_array[1][0], ttt_array[2][0])){
    displayWinner("top_left", "top_center", "top_right", ttt_array[0][0]);
    return false;
  }
  if((ttt_array[0][1] === ttt_array[1][1]) && (ttt_array[0][1] === ttt_array[2][1]) && lineNotNull(ttt_array[0][1], ttt_array[1][1], ttt_array[2][1])){
    return false;
  }
  if((ttt_array[0][2] === ttt_array[1][2]) && (ttt_array[0][2] === ttt_array[2][2]) && lineNotNull(ttt_array[0][2], ttt_array[1][2], ttt_array[2][2])){
    return false;
  }

  //check columns for win
  if((ttt_array[0][0] === ttt_array[0][1]) && (ttt_array[0][0] === ttt_array[0][2]) && lineNotNull(ttt_array[0][0], ttt_array[0][1], ttt_array[0][2])){
    return false;
  }
  if((ttt_array[1][0] === ttt_array[1][1]) && (ttt_array[1][0] === ttt_array[1][2]) && lineNotNull(ttt_array[1][0], ttt_array[1][1], ttt_array[1][2])){
    return false;
  }
  if((ttt_array[2][0] === ttt_array[2][1]) && (ttt_array[2][0] === ttt_array[2][2]) && lineNotNull(ttt_array[2][0], ttt_array[2][1], ttt_array[2][2])){
    return false;
  }

  //check diags for win
  if((ttt_array[0][0] === ttt_array[1][1]) && (ttt_array[0][0] === ttt_array[2][2]) && lineNotNull(ttt_array[0][0], ttt_array[1][1], ttt_array[2][2])){
    return false;
  }
  if((ttt_array[2][0] === ttt_array[1][1]) && (ttt_array[2][0] === ttt_array[0][2]) && lineNotNull(ttt_array[2][0], ttt_array[1][1], ttt_array[0][2])){
    return false;
  }

  return true;

}

//---------------------------------------------------------

var topLeft = document.getElementById("top_left");
topLeft.addEventListener("click", addImage);
var topCenter = document.getElementById("top_center");
topCenter.addEventListener("click", addImage);
var topRight = document.getElementById("top_right");
topRight.addEventListener("click", addImage);
var middleLeft = document.getElementById("middle_left");
middleLeft.addEventListener("click", addImage);
var middleCenter = document.getElementById("middle_center");
middleCenter.addEventListener("click", addImage);
var middleRight = document.getElementById("middle_right");
middleRight.addEventListener("click", addImage);
var bottomLeft = document.getElementById("bottom_left");
bottomLeft.addEventListener("click", addImage);
var bottomCenter = document.getElementById("bottom_center");
bottomCenter.addEventListener("click", addImage);
var bottomRight = document.getElementById("bottom_right");
bottomRight.addEventListener("click", addImage);

var player1 = new Player("Player 1", true, "animals_walrus.gif");
var player2 = new Player("Player 2", false, "animals_octop.gif");
