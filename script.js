console.log ("Hi peter, here's a hint:");

var boxes = document.getElementsByTagName("p");
var counter = 0;

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", boxSelect);
}

function boxSelect() {
  var selectBox = document.getElementById(event.target.id);
    if (selectBox.className == "boxClicker") {
      if (counter % 2 === 0){
        selectBox.innerHTML = "X";
      } else {
        selectBox.innerHTML = "O";
      }
      counter ++ ;
    } else {
      return;
    }
}

// document.getElementsByClassName("boxClicker").addEventListener("click", function() {
//   console.log("you clicked");
// });
