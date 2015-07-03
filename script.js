document.getElementById("rowOneLeft").addEventListener("click", numberOfClicks);
document.getElementById("rowOneMiddle").addEventListener("click", changeMarker);
document.getElementById("rowOneRight").addEventListener("click", changeMarker);
document.getElementById("rowTwoLeft").addEventListener("click", changeMarker);
document.getElementById("rowTwoMiddle").addEventListener("click", changeMarker);
document.getElementById("rowTwoRight").addEventListener("click", changeMarker);
document.getElementById("rowThreeLeft").addEventListener("click", changeMarker);
document.getElementById("rowThreeMiddle").addEventListener("click", changeMarker);
document.getElementById("rowThreeRight").addEventListener("click", changeMarker);

/* the following code works but the counter is incorrect
anywhere on the board i clicked, the counter would increase and not reset
based on which square was clicked.
document.addEventListener("click", changeMarker);
var numberOfClicks = 0;
 function changeMarker() {
   numberOfClicks = numberOfClicks + 1;
   if (numberOfClicks % 3 === 1){
     document.getElementById(event.target.id).innerHTML = "X";
   } else if (numberOfClicks % 3 === 2) {
     document.getElementById(event.target.id).innerHTML = "O";
   } else {
     document.getElementById(event.target.id).innerHTML = "";
   }
   return false;
 }*/

/*document.addEventListener("click", changeMarker);*/
function changeMarker() {

  document.getElementById(event.target.id).innerHTML = numberOfClicks();
}

var clicks = 0;
function numberOfClicks(){
  return clicks ++;
  }



/*function determineClickedSquare(){
  var clickedSquare = event.target.id;
  console.log(clickedSquare);
  changeMarker();
}*/
