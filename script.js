//v.0.1
var counter = 1;
var block = document.body.getElementsByTagName("span");
//as a user I want to click on the box and have it alernate between X and o
//as a user I want to click all the boxes and have it say draw
//as a user I want to reset the gameboard
function playerMove(event){
  if (event.target.innerHTML.length === 0){
  
}


for (i=block.length -1 ; i >= 0 ; i--){
  block[i].addEventListener("click",playerMove);
}//remember because live you have to start from the bottom node
