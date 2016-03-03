var turn = "X";

function changeTurn() {
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  $(".turn").html(turn + "'s turn");
}

function addClick() {
  $(".square").on("click", function() {
    $(this).html(turn);
    changeTurn();
    if (turn == "X") {
      $(this).addClass("dark");
    } else {
      $(this).addClass("light");
    }
    $(this).off();
  });
}

function resetButton() {
  $(".reset").on("click", function() {
    $(".square").html("");
    $(".square").removeClass("light");
    $(".square").removeClass("dark");
    addClick();
  });
}

$( document ).ready(function() {
  changeTurn();
  buildBoard();
  addClick();
  resetButton();
});

function buildBoard() {
  $(".container").html('<div class="turn">X\'s turn</div><div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="row"><div class="square"></div><div class="square"></div><div class="square"></div></div><div class="reset">reset</div>');
}
