var clicks = 0;

function paint() {
    $(".square").on("click", function (){
      clicks++;
      if(clicks % 2 === 0) {
        $(this).addClass("player-two");
        $("#turn").html("First Player Turn");
      } else {
        $(this).addClass("player-one");
        $("#turn").html("Second Player Turn");
      }
      getWinner();
      $(this).off()
    });
  }

function reset() {
   clicks = 0;
    $(".square").removeClass("player-one");
    $(".square").removeClass("player-two");
    $("#turn").html("First Player Turn");
   paint();
}

paint();

$("button").on("click", reset);


row1  = [0, 1, 2];
row2  = [3, 4, 5];
row3  = [6, 7, 8];
col1  = [0, 3, 6];
col2  = [1, 4, 7];
col3  = [2, 5, 8];
diag1 = [0, 4, 8];
diag2 = [2, 4, 6];

function getWinner(){
  winningArrays = [row1, row2, row3, col1, col2, col3, diag1, diag2];
  for (i = 0; i<winningArrays.length; i++){
    currentRow = winningArrays[i];
    if ($("#" + currentRow[0]).hasClass("player-one") &&  $("#" + currentRow[1]).hasClass("player-one") && $("#" + currentRow[2]).hasClass("player-one")){
      alert("Player One has won! Player Two's failure disgraces the House of Atreus.");
      reset();
    }
    else if ($("#" + currentRow[0]).hasClass("player-two") &&  $("#" + currentRow[1]).hasClass("player-two") && $("#" + currentRow[2]).hasClass("player-two")){
      alert("Player Two has won! Player One's shame will echo through eternity.");
      reset();
    }
  }
}
