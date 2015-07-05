var markers = document.body.querySelectorAll(".marker")
var freeSpaces = document.body.querySelectorAll(".free")
var markedSpaces = document.body.querySelectorAll(".marked")

function reset(){
  for (i = 0; i < markedSpaces.length; i ++) {
    markedSpaces[i].className = "free"
  }
  for (i = 0; i < (markers.length - 1); i ++) {
    markers[i].innerHTML = "&nbsp;"
  }
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


document.body.querySelector(".free_space").addEventListener("click", function)


//var squareOne = document.getElementById("square_one")
//var squareTwo = document.getElementById("square_two")
//var squareThree = document.getElementById("square_three")
//var squareFour = document.getElementById("square_four")
//var squareFive = document.getElementById("square_five")
//var squareSix = document.getElementById("square_six")
//var squareSeven = document.getElementById("square_seven")
//var squareEight = document.getElementById("square_eight")
//var squareNine = document.getElementById("square_nine")

//markerOne.innerHTML = "&nbsp;"
//markerTwo.innerHTML = "&nbsp;"
//markerThree.innerHTML = "&nbsp;"
//markerFour.innerHTML = "&nbsp;"
//markerFive.innerHTML = "&nbsp;"
//markerSix.innerHTML = "&nbsp;"
//markerSeven.innerHTML = "&nbsp;"
//markerEight.innerHTML = "&nbsp;"
//markerNine.innerHTML = "&nbsp;"

//var markerOne = document.getElementById("marker_one")
//var markerTwo = document.getElementById("marker_two")
//var markerThree = document.getElementById("marker_three")
//var markerFour = document.getElementById("marker_four")
//var markerFive = document.getElementById("marker_five")
//var markerSix = document.getElementById("marker_six")
//var markerSeven = document.getElementById("marker_seven")
//var markerEight = document.getElementById("marker_eight")
//var markerNine = document.getElementById("marker_nine")
