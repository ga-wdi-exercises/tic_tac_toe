/*document.getElementById("rowOneLeft").addEventListener("click", changeMarker);
document.getElementById("rowOneMiddle").addEventListener("click", changeMarker);
document.getElementById("rowOneRight").addEventListener("click", changeMarker);*/

var numberOfClicks = 0;
 function changeMarker(clickedSquare) {
   numberOfClicks = numberOfClicks + 1;
   if (numberOfClicks % 3 === 1){
     document.getElementById("rowOneLeft").innerHTML = "X";
   } else if (numberOfClicks % 3 === 2) {
     document.getElementById("rowOneLeft").innerHTML = "O";
   } else {
     document.getElementById("rowOneLeft").innerHTML = "";
   }
   return false;
 }

document.addEventListener("click", determineClickedSquare);
function determineClickedSquare(){
  var clickedSquare = event.target.id;
  console.log(clickedSquare);
}
