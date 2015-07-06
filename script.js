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

var array
var newArray

function onClick(){
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
