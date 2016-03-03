//Create board - 3 rows of 3
  // create funtion to append the div's to the board, in order to create the board
    // target the element to append the divs to
    // create function to append the divs


// function appendBox() {
//   // newDiv = document.createElement('div');
//   newDiv.className = "box";
//   $("body").append(newDiv);
//   newDiv.addEventListener("mouseover", function() {
//     this.style.backgroundColor = userInput.value;
//   })
// }


function appendBox() {
  newDiv = document.createElement('div');
  newDiv.className = "box";
  $(".control").append(newDiv)
}

for (var i = 0; i < 9; i++){
  appendBox()
}
