var play;
var counter = 0;
function play() {
  if (counter % 2 == 0) {
    alert("X")
  }
  else if(counter % 2 == 1) {
    alert("O");
  }
  counter ++
}

//This wouldn't work for some reason.//
var text = document.getElementById("topLeft").textContent;
document.getElementById("topLeft").textContent = "This is some text";
