// document.addEventListener("click", changeColor, false);
//
// function changeColor() {
//   document.style.background-color = "#FFC926";
// }


var gameBoard = ["topleft", "topmid", "topright", "midleft", "midmid", "midright", "botleft", "botmid", "botright"];

gameBoard.addEventListener("click", xOrO, false);

function xOrO () {
    for(i = 0; i < gameBoard.length; i++) {
      if (i === (i % 2 === 1)) {
        return ("X");
      }
      else {
        return ("O")
      }
}
