// Requirements:
// 1. user should click on different elements to create a move
// 2. every click alternates between x and o
// 3. when a cell is marked, add a class to display a color
// 4. a move can't be undone
// 5. add reset button to clear board

var numberOfClicks = 0;
var getMoves = document.getElementsByClassName("square");

var b1 = document.getElementById("box1").addEventListener("click", changeButtonDesign);
var b2 = document.getElementById("box2").addEventListener("click", changeButtonDesign);
var b3 = document.getElementById("box3").addEventListener("click", changeButtonDesign);
var b4 = document.getElementById("box4").addEventListener("click", changeButtonDesign);
var b5 = document.getElementById("box5").addEventListener("click", changeButtonDesign);
var b6 = document.getElementById("box6").addEventListener("click", changeButtonDesign);
var b7 = document.getElementById("box7").addEventListener("click", changeButtonDesign);
var b8 = document.getElementById("box8").addEventListener("click", changeButtonDesign);
var b9 = document.getElementById("box9").addEventListener("click", changeButtonDesign);

for (var i = 0; i < getMoves.length; i++) {
  (function(i){
  getMoves[i].addEventListener("click", trackClicks);
  })(i);
}

function trackClicks() {
  numberOfClicks++;
  document.getElementsByClassName("square").innerHTML = numberOfClicks;
}

function changeButtonDesign() {
    if (numberOfClicks % 2 === 0) {
      this.style.backgroundColor = "mediumaquamarine";
      this.innerHTML = "x";
  } else if (numberOfClicks % 2 !==0) {
      this.style.backgroundColor = "skyblue";
      this.innerHTML = "o";
  }
}

// $.cookie('stored_clicks');
