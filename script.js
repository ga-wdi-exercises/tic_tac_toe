$(document).ready(function() {

  var square = $(".square");
  var reset = $("#reset");
  var winner = $("#winner");
  var board = $("#board");
  var clickCounter = 0;
  var xScore = [[]];
  var oScore = [[]];
  var triples = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["7", "8", "9"]
  ];

  var game = {
    play: function(){
      clickCounter++;
      if ((clickCounter % 2 === 0) && ($(this).hasClass("clicked")) === false){
        $(this).html("<img class='o' src='o.png'/>");
        oScore.push.eq(0)(this.id);
      }
      else if ((clickCounter % 2 > 0) && ($(this).hasClass("clicked")) === false){
        $(this).html("<img class='x' src='x.png'/>");
        xScore.push.eq(0)(this.id);
      }
      $(this).addClass("clicked");
      game.score();
    },

    score: function(){
      // if (xScore.length >= 3){
      // // for (var i = 0; i <= xScore.length; i++) {
      //   for (var j = 0; j < 3; j++)
        if($.each(xScore, triples) === true) {
          winner.html("X wins!");
          winner.css("backgroundColor", "red");
      }
    if (oScore.length >= 3){
      // for (var k = 0; k <= oScore.length; k++) {
        // for (var l = 0; l < 3; l++)
        if($.each(oScore, triples) === true) {
          winner.html("O wins!");
          winner.css("backgroundColor", "red");
        }
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
