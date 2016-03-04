$(document).ready(function() {

  var square = $(".square");
  var reset = $("#reset");
  var winner = $("#winner");
  var board = $("#board");
  var clickCounter = 0;
  var xScore = 1;
  var oScore = 1;

  var game = {
    play: function(){
      clickCounter++;
      if ((clickCounter % 2 === 0) && ($(this).hasClass("clicked")) === false){
        $(this).html("<img class='o' src='o.png'/>");
        oScore = this.id * 7 * oScore;
        console.log(oScore);
      }
      else if ((clickCounter % 2 > 0) && ($(this).hasClass("clicked")) === false){
        $(this).html("<img class='x' src='x.png'/>");
        xScore = this.id * 7 * xScore;
        console.log(xScore);
      }
      $(this).addClass("clicked");
      game.score();
    },

    score: function(){
      if (xScore % 2058 === 0 || xScore % 172872 === 0 || xScore % 41160 === 0 || xScore % 15435 === 0 || xScore % 55566 === 0 || xScore % 27440 === 0 || xScore % 9604 === 0 || xScore % 36015 === 0){
        winner.html("X wins!");
        winner.css("backgroundColor", "red");
        console.log("x score is " + xScore);
      }
      if (oScore % 2058 === 0 || oScore % 172872 === 0 || oScore % 41160 === 0 || oScore % 15435 === 0 || oScore % 55566 === 0 || oScore % 27440 === 0 || oScore % 9604 === 0 || oScore % 36015 === 0){
        winner.html("O wins!");
        winner.css("backgroundColor", "red");
        console.log("y score is " + oScore);
      }
  },

    resetGame: function() {
      square.html("");
      square.removeClass("clicked");
      xScore = 1;
      oScore = 1;
      game.play();
    }
  };

  for (var i = 0; i < 9; i++) {
    square.eq(i).on("click", game.play);
  }
  reset.on("click", game.resetGame);
});
