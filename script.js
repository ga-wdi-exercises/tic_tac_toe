$(document).ready(function(){
  $(".square").css("background-color","white");
});
var ticTacToe = {
  oTurn: 0,
  winnerNeeds: [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
  ],
  squares: [
    $(".square").eq(0),
    $(".square").eq(1),
    $(".square").eq(2),
    $(".square").eq(3),
    $(".square").eq(4),
    $(".square").eq(5),
    $(".square").eq(6),
    $(".square").eq(7),
    $(".square").eq(8)
  ],
  clickListeners: function(){
    $(".square").on("click", this.x_and_o.bind(this));
    $("#reset").on("click", this.resetGame);
  },
  x_and_o: function(e){
    if(!$(e.target).html()){
      if(ticTacToe.oTurn === 0){
        $(e.target).html("<h2>X</h2>");
        this.oTurn = 1;
      } else if (ticTacToe.oTurn === 1){
        $(e.target).html("<h2>O</h2>");
        this.oTurn = 0;
      }
    }
    //check for Winner
    this.checkWinner();
  },
  resetGame: function(){
    $(".square").html("");
  },
  checkWinner: function(){
    var winnerNeeds = this.winnerNeeds;
    var squares = this.squares;
    for(var x = 0; x < winnerNeeds.length; x++){
      var condition = winnerNeeds[x];
      var wSquare1 = squares[condition[0]].html();
      var wSquare2 = squares[condition[1]].html();
      var wSquare3 = squares[condition[2]].html();

      if(wSquare1 === wSquare2 && wSquare2 === wSquare3){
        if(wSquare1 !== "" && wSquare2 !== "" && wSquare3 !== ""){
          var myVar = setInterval(function(){
            alert("Gameover!");
          },1000);
          clearInterval(myVar);

        }
      }
    }
  }
};
ticTacToe.clickListeners();
// var reset = document.getElementById("reset");
// reset.addEventListener("click", function(){
//   alert("this one works too!");
// });
