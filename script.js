var freeSpace = document.body.querySelector(".free_space")
var markedSpace = document.body.querySelector(".marked_space")
var allFreeSpaces = document.body.querySelectorAll(".free_space")
var allMarkedSpaces = document.body.querySelectorAll(".marked_space")

var text_one = document.getElementById("marker_one")
var text_two = document.getElementById("marker_two")
var text_three = document.getElementById("marker_three")
var text_four = document.getElementById("marker_four")
var text_five = document.getElementById("marker_five")
var text_six = document.getElementById("marker_six")
var text_seven = document.getElementById("marker_seven")
var text_eight = document.getElementById("marker_eight")
var text_nine = document.getElementById("marker_nine")

function reset(){
  text_one.innerHTML = ""
  text_two.innerHTML = ""
  text_three.innerHTML = ""
  text_four.innerHTML = ""
  text_five.innerHTML = ""
  text_six.innerHTML = ""
  text_seven.innerHTML = ""
  text_eight.innerHTML = ""
  text_nine.innerHTML = ""
  //When #reset_button is clicked, set the class of all marked_space divs to free_space and set innerHTML of all marker spans to "&nsbp;"
}
document.getElementById("reset_button").addEventListener("click",reset)

//function playAnX() {
//  freeSpace = markedSpace
//  if text = "X"
  //When freeSpace is clicked, set class to marked_space and innerHTML to "X"
//}

//function playAnO() {
//  freeSpace = markedSpace
//  text = "O"
  //When freeSpace is clicked, set class to marked_space and innerHTML to "O"
//}

//function playTicTacToe() {
//  for (i=1; i < 10; i++) {
//    if(i % 2 === 0) {
//      playAnO();
//    }
//    else {
//      playAnX();
//    }
    //i++
//  }
//}


document.body.querySelectorAll(".free_space").addEventListener("click", playTicTacToe())
