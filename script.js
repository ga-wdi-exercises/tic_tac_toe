// function defs --------------------------------------------
var ttt_array = [ [],[],[] ];
var play = true;
var player1;
var player2;

function Player (name, turn, token){
  this.name = name;
  this.turn = turn;
  this.token = token;
}

function initPlayers(event){
  event.preventDefault();
  player1Name = document.getElementById("player1").value || "Harry";
  player2Name = document.getElementById("player2").value || "Voldemort";
  player1 = new Player(player1Name, true, "animals_walrus.gif");
  player2 = new Player(player2Name, false, "animals_octop.gif");
  document.getElementById("space").removeChild(document.getElementById("player_names"));

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
  var playAgain = document.getElementById("play_again");
  playAgain.addEventListener("click", reset);
}

function updateTurn(player_current, player_other){
  player_current.turn = false;
  player_other.turn = true;
}

function addImage(event) {
  if (play){
    var image = document.createElement("img");
    this.appendChild(image);
    if(player1.turn === true){
      image.src = player1.token;
      updateTttArray(this.id, player1);
      play = checkForWinner();
      updateTurn(player1, player2);
    }
    else if(player2.turn === true) {
      image.src = player2.token;
      updateTttArray(this.id, player2);
      play = checkForWinner();
      updateTurn(player2, player1);
    }

  }

}

function updateTttArray(id, player){
  switch(id) {
    case "top_left":
      ttt_array[0][0] = player;
      break;
    case "top_center":
      ttt_array[1][0] = player;
      break;
    case "top_right":
      ttt_array[2][0] = player;
      break;
    case "middle_left":
      ttt_array[0][1] = player;
      break;
    case "middle_center":
      ttt_array[1][1] = player;
      break;
    case "middle_right":
      ttt_array[2][1] = player;
      break;
    case "bottom_left":
      ttt_array[0][2] = player;
      break;
    case "bottom_center":
      ttt_array[1][2] = player;
      break;
    case "bottom_right":
      ttt_array[2][2] = player;
      break;
  }

}

function lineNotNull(val1, val2, val3){
  if(val1 == undefined || val2 == undefined || val3 == undefined){
    return false;
  }
  return true;
}

function displayWinner(id1, id2, id3, player){
  var invert_string = "invert_" + player.token;
  document.getElementById("winner_banner").innerText = player.name + " wins!";
  document.getElementById(id1).childNodes[0].src = invert_string;
  document.getElementById(id2).childNodes[0].src = invert_string;
  document.getElementById(id3).childNodes[0].src = invert_string;

}

function checkForWinner(){
  //check rows for win - can use the equality operator on object because the reference to the object is the same - not placing two distinct objects in ttt_array
  if((ttt_array[0][0] === ttt_array[1][0]) && (ttt_array[0][0] === ttt_array[2][0]) && lineNotNull(ttt_array[0][0], ttt_array[1][0], ttt_array[2][0])){
    displayWinner("top_left", "top_center", "top_right", ttt_array[0][0]);
    return false;
  }
  if((ttt_array[0][1] === ttt_array[1][1]) && (ttt_array[0][1] === ttt_array[2][1]) && lineNotNull(ttt_array[0][1], ttt_array[1][1], ttt_array[2][1])){
    displayWinner("middle_left", "middle_center", "middle_right", ttt_array[0][1]);
    return false;
  }
  if((ttt_array[0][2] === ttt_array[1][2]) && (ttt_array[0][2] === ttt_array[2][2]) && lineNotNull(ttt_array[0][2], ttt_array[1][2], ttt_array[2][2])){
    displayWinner("bottom_left", "bottom_center", "bottom_right", ttt_array[0][2]);
    return false;
  }

  //check columns for win
  if((ttt_array[0][0] === ttt_array[0][1]) && (ttt_array[0][0] === ttt_array[0][2]) && lineNotNull(ttt_array[0][0], ttt_array[0][1], ttt_array[0][2])){
    displayWinner("top_left", "middle_left", "bottom_left", ttt_array[0][0]);
    return false;
  }
  if((ttt_array[1][0] === ttt_array[1][1]) && (ttt_array[1][0] === ttt_array[1][2]) && lineNotNull(ttt_array[1][0], ttt_array[1][1], ttt_array[1][2])){
    displayWinner("top_center", "middle_center", "bottom_center", ttt_array[1][0]);
    return false;
  }
  if((ttt_array[2][0] === ttt_array[2][1]) && (ttt_array[2][0] === ttt_array[2][2]) && lineNotNull(ttt_array[2][0], ttt_array[2][1], ttt_array[2][2])){
    displayWinner("top_right", "middle_right", "bottom_right", ttt_array[2][0]);
    return false;
  }

  //check diags for win
  if((ttt_array[0][0] === ttt_array[1][1]) && (ttt_array[0][0] === ttt_array[2][2]) && lineNotNull(ttt_array[0][0], ttt_array[1][1], ttt_array[2][2])){
    displayWinner("top_left", "middle_center", "bottom_right", ttt_array[0][0]);
    return false;
  }
  if((ttt_array[2][0] === ttt_array[1][1]) && (ttt_array[2][0] === ttt_array[0][2]) && lineNotNull(ttt_array[2][0], ttt_array[1][1], ttt_array[0][2])){
    displayWinner("top_right", "middle_center", "bottom_left", ttt_array[2][0]);
    return false;
  }

  return true;

}

function reset(){
  location.reload();
}

//---------------------------------------------------------
var start = document.getElementById("start");
start.addEventListener("click", initPlayers);
