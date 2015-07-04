//v.0.1
var counter = 1;
var block = document.body.getElementsByTagName("span");
var resetBoard = document.getElementById("clear");
//primary diff is understanding what types are returned
//and approp. methods and avail attr you can use!


function clearBoard(){
  for (i=block.length -1 ; i >= 0 ; i--){
    block[i].innerHTML = "";
    block[i].setAttribute("class","");
  }

}
//as a user I want to click on the box and have it alernate between X and o
//as a user I want to click all the boxes and have it say draw
//as a user I want to reset the gameboard
function playerMove(event){
  if (event.target.innerHTML.length === 0){
    if (counter % 2 === 0){
      event.target.setAttribute("class","X fin");
      event.target.innerHTML = "X";
    } else {
      event.target.setAttribute("class","O fin");
      event.target.innerHTML = "O";
    }

    counter++;
  }
}

for (i=block.length -1 ; i >= 0 ; i--){
  block[i].addEventListener("click",playerMove);
}//remember because live you have to start from the bottom node

resetBoard.addEventListener("click",clearBoard);
