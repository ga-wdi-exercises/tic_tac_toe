var playerMove= "x"
var nboard=9
function onclick(playerMove);




/*Player move

player clicks on square
square marks a n x
square changes to green
switch quare is clicked
squares marks an o
square changes to blue
repeate
no 2 squares clicked
reset button
*/


var x = document.getElementsByClassName("square");
var i;
var nSquare= 9;
var counter=0;
var winningCombinations=  [A1,B1,C1],
                          [A2,B2,C2],
                          [A3,B3,C3],
                          [A1,A2,A3],
                          [B1,B2,B3],
                          [C1,C2,C3],
                          [A1,B2,C3],
                          [C1,B2,A3];


for (i = 0; i < nSquare.length; i++) {
    x[i].style.backgroundColor = "blue";
}


/*function onClick(){
  if (getElementByID.A1.value= "x" || "o"){ //check for move
    alert("Please make a different move");
  }

else if (getElementByID.A1.value= " "){// place x
  form.A1.value = "x";
  form.mover.value = "O";
}
else {
  for(var i = 0; i < nboard; i++){
    document.getElementID ("A1") .addEventListener("click", "x");
  getElementbyID.A1[i].mover.value = "x"
 }
*/
