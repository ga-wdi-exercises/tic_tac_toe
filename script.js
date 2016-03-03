var numTurns = 0;

$(document).ready(function(){

  function buildBoard(){
    for (i=0; i < 9; i++){
      var addTile= $("<div class='tile'></div>");
      // console.log(addTile);
      $("#gameboard").append(addTile);
      // console.log($("gameboard"));

    }
  }

  var clickies = function(){
    for (i=0; i < $('.tile').length; i++){
      $(".tile").eq(i).on("click", turn);
    }
  };

  var turn = function(){
      if (numTurns % 2 === 0){
        //this will eventually append html to O
        console.log("o");
        $(".tile").eq(i).html();
      }
      else {
        //append html to x
        console.log("x");
      }
      numTurns++;
  };

  buildBoard();
  clickies();


});
