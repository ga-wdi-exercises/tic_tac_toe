$(document).ready(function() {

  var square = $(".square");
  var reset = $("#reset");
  var winner = $("#winner");
  var board = $("#board");
  var clickCounter = 0;
  var xOwned = [];
  var oOwned = [];
  var winners = [
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
        oOwned.push(this.id);
        console.log(oOwned);
      }
      else if ((clickCounter % 2 > 0) && ($(this).hasClass("clicked")) === false){
        $(this).html("<img class='x' src='x.png'/>");
        xOwned.push(this.id);
        console.log(xOwned);
      }
      $(this).addClass("clicked");
      game.score();
    },

    score: function(){
      for(var i=0; i<winners.length; i++) {
         // It's only 3 elements do you really need to loop?
         if (xOwned.indexOf(winners[i][0]) > -1 && xOwned.indexOf(winners[i][1]) > -1  && xOwned.indexOf(winners[i][2]) > -1) {
             winner.html("X wins!");
             break;
         } else if (oOwned.indexOf(winners[i][0]) > -1 && oOwned.indexOf(winners[i][1]) > -1 && oOwned.indexOf(winners[i][2]) > -1) {
             winner.html("O wins!");
             break;
         }
       }
    },

    resetGame: function() {
      square.html("");
      square.removeClass("clicked");
      xOwned = 1;
      oOwned = 1;
      game.play();
    }
  };

  for (var i = 0; i < 9; i++) {
    square.eq(i).on("click", game.play);
  }
  reset.on("click", game.resetGame);
});
