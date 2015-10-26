$(document).ready(function() {

  var game = {
      currentPlayer: "X",

      winConditions: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8]
      ],

      squares: [
        $("#board").children().eq(0),
        $("#board").children().eq(1),
        $("#board").children().eq(2),
        $("#board").children().eq(3),
        $("#board").children().eq(4),
        $("#board").children().eq(5),
        $("#board").children().eq(6),
        $("#board").children().eq(7),
        $("#board").children().eq(8)
      ],

      start: function() {
        $(".square").on("click", this.playSquare.bind(this));
        $("#reset").on("click",  this.resetGame.bind(this));
      },

      playSquare:  function(evt){
        // this => game
        var square = evt.target;
        var squareHasBeenPlayed = $(square).html();
        if (!squareHasBeenPlayed){
          $(square).html(this.currentPlayer);
          this.checkWinner();
          this.togglePlayer();
        }
      },

      togglePlayer: function(){
        if (this.currentPlayer === "X"){
          this.currentPlayer = "O";
        } else {
          this.currentPlayer = "X";
        }
      },

      resetGame: function() {
        $(".square").html("");
        this.currentPlayer = "X";
      },

      checkWinner: function() {
        var winConditions = this.winConditions;
        var squares = this.squares;
        for(var i = 0; i < winConditions.length; i++) {
          var condition = winConditions[i];
          var testSquare1 = squares[condition[0]].html()
          var testSquare2 = squares[condition[1]].html()
          var testSquare3 = squares[condition[2]].html()
          if (squares[condition[0]].html() === squares[condition[0]].html() && testSquare2 === testSquare3) {
            if (testSquare1 !== "") {
              alert(this.currentPlayer + " won!");
              this.resetGame();
            }
          }
        }
      }
  }

  game.start();

});
