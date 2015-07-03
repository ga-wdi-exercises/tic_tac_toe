document.getElementById("rowOneLeft").addEventListener("click", changeMarker);

var numberOfClicks = 0;
 function changeMarker() {
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
