$(document).ready(function() {

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

//builds board
for (var i = 0; i < 9; i++){
  appendBox()
  $(".box").eq(i).attr("id", i)
  $(".box").eq(i).on("click", function(){
    game.click++
    this.classList.add("active" + xo())
  })
}


function appendBox() {
  newDiv = document.createElement('div');
  newDiv.className = "box";
  $(".control").append(newDiv)
}

game = {
  click: 0,
  box: {
    one: $(".box").eq(0),
    two: $(".box").eq(1)
  },
  threes: {
    topRow: [$("#0"), $("#1"), $("#2")],
    middleRow: [$("#3"), $("#4"), $("#5")],
    bottomRow: [$("#6"), $("#7"), $("#8")],
    leftColumn: [$("#0"), $("#3"), $("#6")],
    middleColumn: [$("#1"), $("#4"), $("#7")],
    rightColumn: [$("#3"), $("#5"), $("#8")],
    diagonal1: [$("#0"), $("#4"), $("#8")],
    diagonal2: [$("#3"), $("#4"), $("#6")]
  }
}

function xo(){
  if (game.click % 2 === 0) {
    return "X"
  } else return "O"
}

threesCompany = function(check) {
  if ((check[0].prop("class") && check[1].prop("class") && check[2].prop("class")) !== "box")  {
    return checkWinner(check)
  }
}

checkWinner = function(three) {
  // var box = $(".box")
    if ((three[0].css("background-image") === three[1].css("background-image")) && (three[0].css("background-image") === three[2].css("background-image"))) {
      alert("Winner")
    } else {
      alert("Loser")
}
}


// (game.threes.topRow[0].prop("class") && game.threes.topRow[1].prop("class") && game.threes.topRow[2].prop("class")) !== "box"


});
