var numTurns = 0;

$(document).ready(function(){

  function buildBoard(){
    for (i=0; i < 9; i++){
      var addTile= $("<div class='tile'></div>");
      $("#gameboard").append(addTile);
    }
  }

  var clickies = function(){
    for (i=0; i < $('.tile').length; i++){
      $(".tile").eq(i).on("click", turn);
    }
  };

  var turn = function(event){
    if (numTurns % 2 === 0){
      console.log("o");
      $(event.target).html("O");
    }
    else {
      console.log("x");
      $(event.target).html("X");

    }
    numTurns++;
  };

  buildBoard();
  clickies();


});
