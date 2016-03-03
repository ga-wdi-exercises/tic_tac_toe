$(document).ready(function(){

var turn = $('.turn');
var table = $('.table');
var reset = $('.reset');
var player = 1;
var player1 = $('.X');
var player2 = $('.O');

$('.grid').click(function() {
  grid = $(this);
  var alreadyPlayed = checkPlayed(grid);
  if(!alreadyPlayed)
  {
    var pattern = pickCharacter(player);
    changePlayed(grid, pattern);
    if(checkIfWon(table, pattern))
    {
      messages.html('Player '+player+' has won.');
      turn.html('');
    }
    else {
      player = setNextPlayer(player);
      displayNextPlayer(turn, player);
    }
  }
  else {
    messages.html('This box is already checked.');
  }
  $('.reset').click(function() {
    player = 1;
    // messages.html('');
    reset(table);
    displayNextPlayer(turn, player);
  });

function checkPlayed(grid) {
  if(grid.hasClass('X') || grid.hasClass('O')) {
    return 1;
  } else {
    return 0;
  }
}

function changePlayed(grid, pattern) {
  return grid.addClass(pattern);
}

function pickCharacter(player) {
  if(player == 1) {
    return 'X';
  } else {
    return 'O';
  }
}

function setNextPlayer(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
}

function displayNextPlayer(turn, player) {
  turn.html('Player turn : '+player);
}

function setTurn(){
  var p = Math.floor((Math.random() * 2) + 1);
  hasWinner=0;
  if(p==1){
    turn = playerName1;
    //boardMsg(playerName1+''s turn now!'');
  }
  else{
    turn = playerName2;
  //  boardMsg(playerName2+''s turn now!'');
  }
}
function checkIfWon(table, pattern) {
  var won = 0;
  if(table.find('#col-1-row-1').hasClass(pattern) && table.find('#col-2-row-1').hasClass(pattern) && table.find('#col-3-row-1').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#col-1-row-1').hasClass(pattern) && table.find('#col-1-row-2').hasClass(pattern) && table.find('#col-1-row-3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#col-1-row-1').hasClass(pattern) && table.find('#col-2-row-2').hasClass(pattern) && table.find('#col-3-row-3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#col-1-row-2').hasClass(pattern) && table.find('#col-2-row-2').hasClass(pattern) && table.find('#col-3-row-2').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#col-1-row-3').hasClass(pattern) && table.find('#col-2-row-3').hasClass(pattern) && table.find('#col-3-row-3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#col-2-row-1').hasClass(pattern) && table.find('#col-2-row-2').hasClass(pattern) && table.find('#col-2-row-3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#col-3-row-1').hasClass(pattern) && table.find('#col-3-row-2').hasClass(pattern) && table.find('#col-3-row-3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#col-3-row-1').hasClass(pattern) && table.find('#col-2-row-2').hasClass(pattern) && table.find('#col-1-row-3').hasClass(pattern)) {
    won = 1;
  }
  return won;
}

$('#resetButton').click(function(){
  player = 1;
  reset(table);
  displayNextPlayer(turn, player)
})

$('#resetButton').click(function (){
  table('grid').each(function() {
    $(this).removeClass('player');
  })
})
})
});
