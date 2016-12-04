$( document ).ready(function() {
  console.log("Pizza");
// var square = $(".square");
//   console.log("Pie");
// square.on("click", updateSquare);
//   console.log("Boop");
});

var click = 0;
// var boxes = $(".square");

var square1 =   document.getElementById("square1");
  square1.addEventListener("click",updateSquare);


function updateSquare() {
// console.log("jk");
// boxes.on("click", function() {
  console.log("hello");
  click = click + 1;
  console.log(click);
  if ((click%2) !==0) {
    square1.textContent="x";
    square1.style.backgroundColor = "pink";
    square1.style.color = "white";
  } else {
    square1.textContent="O";
    square1.style.backgroundColor = "lightblue";
    square1.style.color = "black";
}

var square2 = document.getElementById("square2");
  square2.addEventListener("click",updateSquare2);
  function updateSquare2() {
    console.log("hello");
  click = click + 1;
    console.log(click);
  if ((click%2) !==0) {
    square2.textContent="x";
    square2.style.backgroundColor = "pink";
    square2.style.color = "white";
  } else {
    square2.textContent="O";
    square2.style.backgroundColor = "lightblue";
    square2.style.color = "black";
  }
}






var square3 = document.getElementById("square3");
  square3.addEventListener("click",updateSquare3);

  function updateSquare3() {
    console.log("hello");
  click = click + 1;
    console.log(click);
  if ((click%2) !==0) {
    square3.textContent="x";
    square3.textContent="x";
    square3.style.backgroundColor = "pink";
    square2.style.color = "white";
  } else {
    square3.textContent="O";
    square3.style.backgroundColor = "lightblue";
    square3.style.color = "black";
  }
}

var square4 = document.getElementById("square4");
square4.addEventListener("click",updateSquare4);

function updateSquare4() {
  console.log("hello");
  click = click + 1;
  console.log(click);
  if ((click%2) !==0) {
    square4.textContent="x";
    square4.style.backgroundColor = "pink";
    square4.style.color = "white";
  } else {
    square4.textContent="O";
    square4.style.backgroundColor = "lightblue";
    square4.style.color = "black";
  }
}


var square5 = document.getElementById("square5");
  square5.addEventListener("click",updateSquare5);

function updateSquare5() {
  console.log("hello");
  click = click + 1;
  console.log(click);
  if ((click%2) !==0) {
    square5.textContent="x";
    square5.style.backgroundColor = "pink";
    square5.style.color = "white";
  } else {
    square5.textContent="O";
    square5.style.backgroundColor = "lightblue";
    square5.style.color = "black";
  }
}

var square6 = document.getElementById("square6");
square6.addEventListener("click",updateSquare6);

function updateSquare6() {
  console.log("hello");
  click = click + 1;
  console.log(click);
    if ((click%2) !==0) {
    square6.textContent="x";
    square6.textContent="x";
    square6.style.backgroundColor = "pink";
    square2.style.color = "white";
  } else {
    square6.textContent="O";
    square6.style.backgroundColor = "lightblue";
    square6.style.color = "black";
  }
}


var square7 = document.getElementById("square7");
  square7.addEventListener("click",updateSquare7);

function updateSquare7() {
  console.log("hello");
  click = click + 1;
  console.log(click);
  if ((click%2) !==0) {
    square7.textContent="x";
    square7.textContent="x";
    square7.style.backgroundColor = "pink";
    square2.style.color = "white";
} else {
    square7.textContent="O";
    square7.style.backgroundColor = "lightblue";
    square7.style.color = "black";
  }
}


var square8 =   document.getElementById("square8");
  square8.addEventListener("click",updateSquare8);

function updateSquare8() {
  console.log("hello");
  click = click + 1;
  console.log(click);
  if ((click%2) !==0) {
    square8.textContent="x";
    square8.style.backgroundColor = "pink";
    square8.style.color = "white";
  } else {
    square8.textContent="O";
    square8.style.backgroundColor = "lightblue";
    square8.style.color = "black";
  }
}


var square9 =  document.getElementById("square9");
  square9.addEventListener("click",updateSquare9);

function updateSquare9() {
  console.log("hello");
click = click + 1;
  console.log(click);
if ((click%2) !==0) {
  square9.textContent="x";
  square9.style.backgroundColor = "pink";
  square9.style.color = "white";
} else {
  square9.textContent="O";
  square9.style.backgroundColor = "lightblue";
  square9.style.color = "black";
  }
}

square1.removeEventListener("click", leaveValue);
function leaveValue(){
}


var reset = document.getElementById("reset");
reset.addEventListener("click",resetBoard);

function resetBoard() {
 square1.textContent="";
 square2.textContent="";
 square3.textContent="";
 square4.textContent="";
 square5.textContent="";
 square6.textContent="";
 square7.textContent="";
 square8.textContent="";
 square9.textContent="";
}


// set up an eventlistener in jquery
// create background color in css with text


// var element = document.getElementById("square1");
// element.classList.add("otherclass");
// var color = document.getElementById("square1");
// square1.square.add("")

// function changeColor() {
//   square2.style.backgroundColor = "pink"
