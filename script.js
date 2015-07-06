var squares = document.getElementsByClassName('blank');
var start = 1;
for(var i=0; i < squares.length; i++){
    squares[i].addEventListener('click', markerSet);
}
function markerSet(input) {
  if (input.target.innerHTML.length === 0) {
  if (start % 2 === 0) {
    input.target.innerHTML = "X";
    input.target.style.background = "pink";
}
  else {
    input.target.innerHTML = "O";
    input.target.style.background = "lime";
}
}
else {
  alert("Already clicked");
  start -= 1;
}
start++;
}
var resetButton = document.getElementById("reset");
resetButton.addEventListener('click', resetBoard);
function resetBoard(){
  for(var i=0;i<squares.length;i++) {
  squares[i].innerHTML = "";
  squares[i].style.background= "#fff";
}
}
