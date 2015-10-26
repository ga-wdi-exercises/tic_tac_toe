$(document).ready(function(){
  $(".square").css("background-color","white");
});

var ticTacToe = {
  oTurn: 0,
  clickListeners: function(){
    $(".square").on("click", this.x_and_o.bind(this));
    $("#reset").on("click", this.resetGame);
  },
  x_and_o: function(e){
    if(ticTacToe.oTurn === 0){
      $(e.target).html("<h1>X</h1>");
      this.oTurn = 1;
    } else if (ticTacToe.oTurn === 1){
      $(e.target).html("<h1>O</h1>");
      this.oTurn = 0;
    }
  },
  resetGame: function(){
    $(".square").html("");
  }
};
ticTacToe.clickListeners();

// var reset = document.getElementById("reset");
// reset.addEventListener("click", function(){
//   alert("this one works too!");
// });
