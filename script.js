$( document ).ready(function() {
  changeTurn();
  buildBoard();
  addClick();
  resetButton();
});

var turn = "X";

function changeTurn() {
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}
function buildBoard() {
  $(".container").html('<div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="reset">reset</div>');
}

function addClick() {
  $(".square").on("click", function() {
    $(this).html(turn);

    if (turn == "X") {
      $(this).addClass("X");
    } else {
      $(this).addClass("Y");
    }
    changeTurn();
  });
}

function resetButton() {
  $(".reset").on("click", function() {
    $(".square").html("");
    $(".square").removeClass("X");
    $(".square").removeClass("Y");
  });
}
