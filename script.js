// Requirements:
// 1. user should click on different elements to create a move
// 2. every click alternates between x and o
// 3. when a cell is marked, add a class to display a color
// 4. a move can't be undone
// 5. add reset button to clear board

// Outline:
// 1. listen for a click event on a box
// 2. when click on a box is executed, toggle between marking x and o

var numberOfClicks = 0;
var getMoves = document.getElementsByClassName('square');

for (var i = 0; i < getMoves.length; i++) {
  (function(i){
  getMoves[i].addEventListener("click", toggleButtonDesign);
  })(i);
}
  function toggleButtonDesign() {
    numberOfClicks++;
    if (numberOfClicks % 2 === 0) {
    document.getElementById("box1").classList.toggle("green");
  } else if (numberOfClicks % 2 !==0) {
    document.getElementById("box1").classList.toggle("blue");
  }
}
