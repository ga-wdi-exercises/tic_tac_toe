var game = {
    currentPlayer: "X",

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
    }
}

$(document).ready(game.start.bind(game));
