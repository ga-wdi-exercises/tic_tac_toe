$(document).ready(function(){

  // var colorChoose = "green";

  var createBoard = function(){
    for(i=0;i<9;i++){
      $(".board").append("<div class=\"cell\" id=\""+i+"cell\" style=\"background-color:slategray\"></div>");
    }
  };

  //create the board
  createBoard();

  //create a counter that will determine the player
  var playerCounter = 1;
  $('#turn').html('Turn: Player One');


  $(".cell").on("click", function(){
    // sets variables for color and text
    var colorChoose = $(this).css("background-color");
    var playerText;
    var playerStatus;
    if(colorChoose === "rgb(112, 128, 144)"){
      if (playerCounter%2===0){
        //evens, first player
        colorChoose = "blue";
        playerText = "x";
        playerCounter++;
        playerStatus = "Turn: Player One";
      }
      else{
        //odds, second player
        colorChoose = "red";
        playerText = "o";
        playerCounter++;
        playerStatus = "Turn: Player Two";
      }
      if(playerCounter>=10){
        playerStatus ="Deep down, we're all winners";
      }
    }
    else {
      //Reset white blocks to default green when clicked // now we're using slategray
      // colorChoose = "green";
      //shame cheaters and not allow players to change blocks
      alert("CHEATER NO CHEATING.");
    }
    $(this).css("background-color", colorChoose);
    $(this).text(playerText);
    var checkWinner = function () {
      // // Check winners on background-color
      // var cellVal0 = $('#0cell').css("background-color");
      // var cellVal1 = $('#1cell').css("background-color");
      // var cellVal2 = $('#2cell').css("background-color");
      // var cellVal3 = $('#3cell').css("background-color");
      // var cellVal4 = $('#4cell').css("background-color");
      // var cellVal5 = $('#5cell').css("background-color");
      // var cellVal6 = $('#6cell').css("background-color");
      // var cellVal7 = $('#7cell').css("background-color");
      // var cellVal8 = $('#8cell').css("background-color");

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
          playerStatus = "Player RED wins!";
        }
        else{
          playerStatus = "Player BLUE wins!";
        }
        alert("OH MY STARS");
      }
    };
    checkWinner();

    $('#turn').html(playerStatus);


  });


  //this resets the colors to the "neutral" slategray
  $("#resetButton").on("click", function(){
    var resetColor = "slategray";
    $(".cell").css("background-color", resetColor);
    $(".cell").text("");
    playerCounter = 1;
    $('#turn').html("Turn: Player One");
    event.preventDefault();
  });


  // previous code before implementing colorChoose as the if else conditional
  //   if ($(this).css("background-color", "green")){
  //       colorChoose = "white";
  //   }
  //   else {
  //       colorChoose = "green";
  //   }
  //   $(this).css("background-color", colorChoose);
  // });

  // if ($(this).css("background", "white")===true)

});
