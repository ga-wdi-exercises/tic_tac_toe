var click = 0;
var boxes = $(".square")

function updateSquare() {
 console.log("jk");
 boxes.on("click", function() { console.log("hello")})
 click = click + 1;
 console.log(click);
 if (click%2 !==0) {
   $(".square").html("X");
 } else {
   $(".square").html("O");
 }
}

$( document ).ready(function() {
   console.log("Pizza");
 var square = $(".square");
   console.log("Pie");
 square.on("click", updateSquare);
   console.log("Boop");
});

// reset.on("click", resetBoard);
//    console.log("reset here.");
// function resetBoard() {
//    square1.textContent = "";
// }

// Second variable.
var reset = $("#reset");

boxes.on("click", function(){
   click++
   console.log(click)
   if (click % 2 !== 0) {
      boxes.html("X");
      console.log("XXXXXXXXXXX");
   } else if (click % 2 == 0) {
      boxes.html("O");
      console.log("OOOOOOOOOOOOOO");
   }}
)
//
// square3 = document.getElementById("square3");
// square3.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square3.textContent = "X";
//    } else {
//       square3.textContent = "O";
// }
// }
//
// square4 = document.getElementById("square4");
// square4.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square4.textContent = "X";
//    } else {
//       square4.textContent = "O";
// }
// }
//
// square5 = document.getElementById("square5");
// square5.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square5.textContent = "X";
//    } else {
//       square5.textContent = "O";
// }
// }
//
// square6  = document.getElementById("square6");
// square6.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square6.textContent = "X";
//    } else {
//       square6.textContent = "O";
// }
// }
//
// square7 = document.getElementById("square7");
// square7.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square7.textContent = "X";
//    } else {
//       square7.textContent = "O";
// }
// }
//
// square8 = document.getElementById("square8");
// square8.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square8.textContent = "X";
//    } else {
//       square8.textContent = "O";
// }
// }
//
// square9 = document.getElementById("square9");
// square9.addEventListener("click",updateSquare)
// function updateSquare() {
//    click = click + 1
//    if (click%2 !==0) {
//       square9.textContent = "X";
//    } else {
//       square9.textContent = "O";
// }
// }
