var turn = "X";

function changeTurn() {
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}




$(".container").html('<div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="reset">reset</div>');

$(".square").on("click", function() {
  $(this).html(turn);
  changeTurn();
});

$(".reset").on("click", function() {
  $(".square").html("");
});
