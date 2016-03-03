$(document).ready(function() {

  var square = $(".square");
  var reset = $("#reset");
  var winner = $("#winner");
  var clickCounter = 0;
  var xScore = 1;
  var oScore = 1;

  var game = {
    play: function(){
      clickCounter++;
      if ((clickCounter % 2 === 0) && ($(this).hasClass("clicked")) === false){
        $(this).html("<img class='o' src='o.png'/>");
        console.log(this.id);
        oScore = parseInt($(this).id) * 2 * oScore;
        console.log(xScore);
      }
      else if ((clickCounter % 2 > 0) && ($(this).hasClass("clicked")) === false){
        $(this).html("<img class='x' src='x.png'/>");
        xScore = parseInt($(this).id) * 2 * xScore;
        console.log(oScore);
      }
      $(this).addClass("clicked");
      game.score();
    },

    score: function(){
      if (xScore == 840 || xScore == 48 || xScore == 200 || xScore == 432 || xScore == 360 || xScore == 1296 || xScore == 640 || xScore == 1344){
        winner.text("X wins!");
        console.log(xScore);
      }
      if (oScore == 840 || oScore == 48 || oScore == 200 || oScore == 432 || oScore == 360 || oScore == 1296 || oScore == 640 || oScore == 1344){
        winner.html("O wins!");
        console.log(oScore);
      }
  },
    //
    // resetGame: function() {
    //
    // }
  };

  for (var i = 0; i < 9; i++) {
    square.eq(i).on("click", game.play);
  }
  // reset("click", game.resetGame);
});
