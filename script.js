$(document).ready(function(){
  $(".square").css("background-color","white");
});

var ticTacToe = {
  oTurn: 0,
  clickListeners: function(){
    $(".square").on("click", this.x_and_o);
  },
  x_and_o: function(){
    if(ticTacToe.oTurn === 0){
      $(this).html("<h1>X</h1>")
      ticTacToe.oddeven = 1;
    } else if (ticTacToe.oTurn === 1){
      $(this).html("<h1>O</h1>")
      ticTacToe.oddeven = 0;
    }

  }
}

ticTacToe.clickListeners();
