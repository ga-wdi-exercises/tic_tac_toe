$(document).ready(function(){

  // var colorChoose = "green";

  var createBoard = function(){
    for(i=0;i<9;i++){
      $(".board").append("<div class=\"cell\" id=\""+i+"cell\" style=\"background-color:slategray\"> </div>");
    }
  };

  //create the board
  createBoard();

  //create a counter that will determine the player
  var playerCounter = 1;
  $('#turn').html('Turn: Player One');


  $(".cell").on("click", function(){
  var colorChoose = $(this).css("background-color");
    if(colorChoose === "rgb(112, 128, 144)"){

      if (playerCounter%2===0){
        //evens, first player
        colorChoose = "blue";
        playerCounter++;
        $('#turn').html('Turn: Player One');
      }
      else{
        //odds, second player
        colorChoose = "red";
        playerCounter++;
        $('#turn').html('Turn: Player Two');
      }
      if(playerCounter>=10){
        $('#turn').html("Deep down, we're all winners");
      }
    }
    else {
      //Reset white blocks to default green when clicked // now we're using slategray
      // colorChoose = "green";
      //shame cheaters and not allow players to change blocks
      alert("CHEATER NO CHEATING.");
    }
    $(this).css("background-color", colorChoose);
  });


//this resets the colors to the "neutral" slategray
  $("#resetButton").on("click", function(){
    var resetColor = "slategray";
    $(".cell").css("background-color", resetColor);
    playerCounter = 1;
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
