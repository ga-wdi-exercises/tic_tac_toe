var array = [[#LT, #MT, #RT],[#LM, #MM, #RM],[#LB, #MB, #RB]]
var play = document.getElementsByClassName("board");
play.addEventListener("click", addXO);
function addXO() = {
  event.target.innerHTML = "X";
}
