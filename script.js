//turn

var turn = 0;
var squares = $("td");

addLetter = function() {

  //if turn = even
  if (turn % 2 === 0) {
    //click event should append X to appropriate square
    console.log(this);
    $(this).text("X");
    winner();
  }
  //if turn = odd
  else {
    //click event should append O to appropriate square
    console.log(this);
    $(this).text("O");
    winner();
  }
  turn += 1;   //Even though this action is in the function scope, it is updating the value of a global variable.  So even thought turn = 0 in global scope, after you click, it refers to the global variable and updates it by one.
};

//For loop to assign eventlistners


for(var i = 0; i < squares.length; i++ ){
  squares.eq(i).on("click", addLetter);
}

//Determine winner and end game


function winner() {
  //row winner
  console.log(squares.eq(0).text() + " zero");
  console.log(squares.eq(1).text() + " one");
  console.log(squares.eq(2).text() + " two");
  if ((squares.eq(0).html() === squares.eq(1).html()) && (squares.eq(0).html() === squares.eq(2).html())) {
    alert("Row 1 Winner!");
  }
  console.log("test");
  //column winner
  //diagonal winner
  //cats game
}


//create event listeners for each square - explicitly (no loops)

// grid.sq11.on("click", function() {
//   grid.sq11.text("X");
//   grid.sq11.addClass("X");
// });
// grid.sq12.on("click", addX);
//
// grid.sq13.on("click", addO);
//
// grid.sq21.on("click", function() {
//   grid.sq21.text("X");
// });
//
// grid.sq22.on("click", function() {
//   grid.sq22.text("X");
// });
//
// grid.sq23.on("click", function() {
//   grid.sq23.text("X");
// });
//
// grid.sq31.on("click", function() {
//   grid.sq31.text("X");
// });
//
// grid.sq32.on("click", function() {
//   grid.sq32.text("X");
// });
//
// grid.sq33.on("click", function() {
//   grid.sq33.text("X");
// });
