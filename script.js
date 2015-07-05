var markers = document.body.querySelectorAll(".marker")
var playableSpaces = document.body.querySelectorAll(".playable_square")
var topRow = document.getElementById("top_row").children
var middleRow = document.getElementById("middle_row").children
var bottomRow = document.getElementById("bottom_row").children
var counter = []

function playTopLeft() {
  counter.push(topRow[0]);
  if(counter.length % 2 === 0){
    topRow[0].className = "markedO"
    markers[0].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    topRow[0].className = "markedX"
    markers[0].innerHTML = "X"
  }
  return counter.length
}

function playTopMiddle() {
  counter.push(topRow[1]);
  if(counter.length % 2 === 0){
    topRow[1].className = "markedO"
    markers[1].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    topRow[1].className = "markedX"
    markers[1].innerHTML = "X"
  }
  return counter.length
  }

function playTopRight() {
  counter.push(topRow[2]);
  if(counter.length % 2 === 0){
    topRow[2].className = "markedO"
    markers[2].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    topRow[2].className = "markedX"
    markers[2].innerHTML = "X"
  }
  return counter.length
}

function playMiddleLeft() {
  counter.push(middleRow[0]);
  if(counter.length % 2 === 0){
    middleRow[0].className = "markedO"
    markers[3].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    middleRow[0].className = "markedX"
    markers[3].innerHTML = "X"
  }
  return counter.length
}

function playCenterSquare() {
  counter.push(middleRow[1]);
  if(counter.length % 2 === 0){
    middleRow[1].className = "markedO";
    markers[4].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    middleRow[1].className = "markedX";
    markers[4].innerHTML = "X"
  }
  return counter.lengthmiddl
  }

function playMiddleRight() {
  counter.push(middleRow[2]);
  if(counter.length % 2 === 0){
    middleRow[2].className = "markedO"
    markers[5].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    middleRow[2].className = "markedX"
    markers[5].innerHTML = "X"
  }
  return counter.length
}

function playBottomLeft() {
  counter.push(bottomRow[0]);
  if(counter.length % 2 === 0){
    bottomRow[0].className = "markedO"
    markers[6].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    bottomRow[0].className = "markedX"
    markers[6].innerHTML = "X"
  }
  return counter.length
}

function playBottomMiddle() {
  counter.push(bottomRow[1]);
  if(counter.length % 2 === 0){
    bottomRow[1].className = "markedO";
    markers[7].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    bottomRow[1].className = "markedX";
    markers[7].innerHTML = "X"
  }
  return counter.length
  }

function playBottomRight() {
  counter.push(bottomRow[2]);
  if(counter.length % 2 === 0){
    bottomRow[2].className = "markedO"
    markers[8].innerHTML = "O"
  }
  else if (counter.length % 2 !== 0){
    bottomRow[2].className = "markedX"
    markers[8].innerHTML = "X"
  }
  return counter.length
}

function reset(){
  for (i = 0; i < playableSpaces.length; i ++) {
    playableSpaces[i].className = "playable_square"
  }
  for (i = 0; i < (markers.length - 1); i ++) {
    markers[i].innerHTML = "&nbsp;"
  }
  counter = []
  return true
}

document.getElementById("reset_button").addEventListener("click",reset);
topRow[0].addEventListener("click", playTopLeft);
topRow[1].addEventListener("click", playTopMiddle);
topRow[2].addEventListener("click", playTopRight);
middleRow[0].addEventListener("click", playMiddleLeft);
middleRow[1].addEventListener("click", playCenterSquare);
middleRow[2].addEventListener("click", playMiddleRight);
bottomRow[0].addEventListener("click", playBottomLeft);
bottomRow[1].addEventListener("click", playBottomMiddle);
bottomRow[2].addEventListener("click", playBottomRight);

//At a later date: make played squares unclickable; limit to 9 moves; make it baseball themed,
