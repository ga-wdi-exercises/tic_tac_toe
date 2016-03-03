// Psuedo Code
  //Create board - 3 rows of 3
    //[x] create funtion to append the div's in order to create the board
      //[x] target the element to append the divs to
  // [x] Create a click event that puts an "x" or "o" in the box
  // Need to create logic where the first click on the board is an "x" and the second click is an "o".  Repeat.
    //Don't need to necessarily log the picks, can read the the "x" or "o" from the board
    // could do a oneClcik and twoClick, and .pop the value everytime.
    // could do %2 to determine whether

// --> code <--

click = 0

//builds board
for (var i = 0; i < 9; i++){
  appendBox()
  $(".box").eq(i).on("click", function(){
    click++
    this.classList.add("active" + xo())
  })
}

function appendBox() {
  newDiv = document.createElement('div');
  newDiv.className = "box";
  $(".control").append(newDiv)
}

function xo(){
  if (click % 2 === 0) {
    return "X"
  } else return "O"
}

function threesCompany() {
  // var box = $(".box")
    if (($(".box").eq(0).css("background-image") ===    $(".box").eq(1).css("background-image")) && ($(".box").eq(0).css("background-image") === $(".box").eq(2).css("background-image"))) {
      alert("Winner")
    } else null
}
