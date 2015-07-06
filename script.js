var grid = document.querySelector("#grid");

grid.addEventListener("click", markSquare);

function markSquare(square) {  
    var clicked = square.target.id;
    document.getElementById(clicked).innerHTML = "X";

}
