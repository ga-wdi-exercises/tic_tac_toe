$(document).ready(function(){

  var createBoard = function(){
    for(i=0;i<9;i++){
      $(".board").append("<div class=\"cell\" id=\""+i+"cell\" style=\"background-color:lightgray\"></div>");
    }
  };

  //create the board
  createBoard();

  //create a counter that will determine the player
  var playerCounter = 1;
  $('#turn').text("X");

  $(".cell").on("click", function(){
    // sets variables for color and text
    var colorChoose = $(this).css("background-color");
    var playerText;
    var playerStatus;
    if(colorChoose === "rgb(211, 211, 211)"){
      if (playerCounter%2===0){
        //evens, first player
        colorChoose = "pink";
        playerText = "x";
        playerCounter++;
        playerStatus = "O";
      }
      else{
        //odds, second player
        colorChoose = "powderblue";
        playerText = "o";
        playerCounter++;
        playerStatus = "X";
      }
      if(playerCounter>=10){
        playerStatus ="Deep down, we're all winners";
      }
    }
    else {
      //shame cheaters and not allow players to change blocks
      alert("CHEATER NO CHEATING.");
    }

    $(this).css("background-color", colorChoose);
    $(this).text(playerText);

    var checkWinner = function () {
      var cellVal0 = $('#0cell').text();
      var cellVal1 = $('#1cell').text();
      var cellVal2 = $('#2cell').text();
      var cellVal3 = $('#3cell').text();
      var cellVal4 = $('#4cell').text();
      var cellVal5 = $('#5cell').text();
      var cellVal6 = $('#6cell').text();
      var cellVal7 = $('#7cell').text();
      var cellVal8 = $('#8cell').text();

      if((((cellVal0===cellVal3)&&(cellVal0===cellVal6))&&(cellVal0 !== ""))||
      (((cellVal1===cellVal4)&&(cellVal1===cellVal7))&&(cellVal7 !== ""))||
      (((cellVal2===cellVal5)&&(cellVal2===cellVal8))&&(cellVal8 !== ""))||
      (((cellVal0===cellVal1)&&(cellVal0===cellVal2))&&(cellVal2 !== ""))||
      (((cellVal3===cellVal4)&&(cellVal3===cellVal5))&&(cellVal5 !== ""))||
      (((cellVal6===cellVal7)&&(cellVal6===cellVal8))&&(cellVal8 !== ""))||
      (((cellVal0===cellVal4)&&(cellVal0===cellVal8))&&(cellVal8 !== ""))||
      (((cellVal2===cellVal4)&&(cellVal2===cellVal6))&&(cellVal8 !== ""))){
        playerCounter = playerCounter - 1;
        if (playerCounter%2===0){
          playerStatus = "X wins!";
        }
        else{
          playerStatus = "O wins!";
        }
        alert("OH MY STARS");
      }
    };
    checkWinner();
    $('#turn').text(playerStatus);
  });

  //this resets the colors to the "neutral" lightgray
  $("#resetButton").on("click", function(){
    var resetColor = "lightgray";
    $(".cell").css("background-color", resetColor);
    $(".cell").text("");
    playerCounter = 1;
    $('#turn').text("X");
    event.preventDefault();
  });
});
