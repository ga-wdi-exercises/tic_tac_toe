winningMoves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
player1 = [];
player2 = [];
players = [];
moves = 0;
player1Wins = 0;
player2Wins = 0;
gameOver = false;
game ={
  player1Move: "",
  player2Move: "",

  pickMoveForGame: function(){
    $("p").eq(0).html("What move would you like to choose to play?")
    $(".O").click(function(){
      game.player1Move = "O"
      game.player2Move = "X"
      $("p").eq(0).hide();
      $(".O").hide();
      $(".X").hide();
      game.makeGame();
    })
    $(".X").click(function(){
      game.player1Move = "X"
      game.player2Move = "O"
      $("p").eq(0).hide();
      $(".O").hide();
      $(".X").hide();
      game.makeGame();
    })
  },

  makeGame: function(){
    for(var i =0; i<9; i++){
      $("#game_board").append("<div class='square'> </div>")
    }
    game.playgame();
  },

  playgame: function(){
     $(".square").on("click", gameFunction)
  },

  playNewgame: function(){
    game.pickMoveForGame();
  }
}

function gameFunction(){
  if(gameOver === false && $(this).hasClass("move") === false){
    if(players.length === 0){
      $("p").eq(1).html("Player 1's Move");
      $(this).addClass("move");
      $(this).css("background-color","white")
      $(this).css("color","#33FF99")
      $(this).html(game.player1Move);
      player1.push($(this).index())
      moves++
      checkWinner();
      players.push(game.player1Move);
    }
    else if (players.length === 1) {
      $("p").eq(1).html("Player 2's Move");
      $(this).addClass("move");
      $(this).css("background-color","white")
      $(this).css("color","#336666")
      $(this).html(game.player2Move);
      player2.push($(this).index())
      checkWinner()
      players = [];
    }
  }
}

function checkWinner(){
  for(var i =0; i < winningMoves.length; i++){
    var matches1 = 0;
    var matches2 = 0;
    winningMoves[i].forEach(function(number){
      if(player1.includes(number)){
        matches1++;
        if( matches1 === 3){
          $("p").eq(1).html("Player 1 Wins")
          gameOver = true;
          return gameOver;
        }
        else if (matches1 != 3 && moves === 5){
          $("p").eq(1).html("It's a tie Just pretend like nothing happened");
        }
      }else if(player2.includes(number)){
        matches2++;
        if (matches2 === 3) {
          $("p").eq(1).html("Player 2 Wins")
          gameOver = true;
          return gameOver;
        }
        else {
          return gameOver;
        }
      }
    });
  }
}

game.playNewgame();
