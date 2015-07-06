var grid = document.querySelector("#grid");

grid.addEventListener("click", markSquare);

function markSquare(square) {
  if (square.target != square.currentTarget) {
    var clicked = square.target.id;
    document.getElementById(clicked).innerHTML = "X";
  }
}
