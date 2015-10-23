$(document).ready(function() {
    console.log( "ready!" );
});

$(".play").click(function(evt) {
    // This is an interesting way to switch between 2 toggles called a terneary (sp?) toggle, but only works for 2 values (If X is true, ? turn to O. If not, turn to : X.). I need 3, though. I got stuck here and had to check out the solution branch to find how to use "event.target" and add 3 different toggles.
  // $(this).html($(this).html() == "X" ? "O" : "X");
  if (evt.target.innerHTML.length == 0) {
    event.target.innerHTML = "X";
  } else if (evt.target.innerHTML == "X") {
    event.target.innerHTML = "O";
  } else {
    event.target.innerHTML = "";
  }
});

$("#reset").click(function() {
  $(".play").html("");
});

// Winning combinations
// function winner (){
//   if ($("#pos1").text() == "X"){
//     alert("You win x!");
//   }
// }
