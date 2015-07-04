//Tic-Tac-Toe game//
// var button = document.getElementsByTagName("button")[0];
// var buttonText = document.getElementsByClassName("turnSwitchBtn")[0].innerHTML;

//Access the p element inside my cells
//Change to "X"
var turnX = function(){
  function changeToX(e) {
    e.target.innerHTML = "X"; //whatever div was clicked, add X
  }
//Add click event listener to all cells
  var allCells = document.getElementsByClassName("cell");
  for (var i = 0; i < allCells.length; i++){
    var cellContent = document.getElementsByClassName("cell")[i];
    cellContent.addEventListener("click", changeToX);
  }
}

//Change to O
var turnO = function() {
  function changeToO(e) {
    e.target.innerHTML = "O";
  }
//Add click event listener to all cells
  var allCells = document.getElementsByClassName("cell");
  for (var i = 0; i < allCells.length; i++){
    var cellContent = document.getElementsByClassName("cell")[i];
    cellContent.addEventListener("click", changeToO);
  }
}
var counter = 0;
while(counter < 9){
  if (counter % 2 === 0){
    counter ++;
    turnX();
  }
  else {
    counter ++;
    turnO();
  }
}
// function turnSwitch(){
//     if (buttonText == "Turn X") {
//       document.getElementsByClassName("turnSwitchBtn")[0].innerHTML = "Turn O";
//       console.log(buttonText);
//       console.log(document.getElementsByClassName("turnSwitchBtn")[0].innerHTML);
//       turnO();
//     }
//     else if (buttonText == "Turn O"){
//       document.getElementsByClassName("turnSwitchBtn")[0].innerHTML = "Turn X";
//       console.log(buttonText);
//       console.log(document.getElementsByClassName("turnSwitchBtn")[0].innerHTML);
//       turnX();
//     }
// }
// console.log(buttonText);
// for(var turn = 0; turn <9; turn++){
//   button.addEventListener("click", turnSwitch);
// }
