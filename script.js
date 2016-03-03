//turn



//grid square locations

var grid = {
  sq11: $("#sq11"),
  sq12: $("#sq12"),
  sq13: $("#sq13"),
  sq21: $("#sq21"),
  sq22: $("#sq22"),
  sq23: $("#sq23"),
  sq31: $("#sq31"),
  sq32: $("#sq32"),
  sq33: $("#sq33")
};


//create function to add X and O

var addX = function() {
  grid.sq12.text("X");
};

var addO = function() {
  grid.sq13.text("O");
};

addLetter = function() {
  var turn = 0;
  //if turn = even
  if (turn % 2 === 0) {
    //click event should append X to appropriate square
    console.log(this);
    $(this).text("X");
  }
  //if turn = odd
  else if (turn % 2 === 1) {
    //click event should append O to appropriate square
    $(this).text("O");
  }
  //after click event, turn variable should increase by one while turn < 9 (there will be no more than 9 turns)
  turn += 1;
};

//Experiment with for loop to assign eventlistners

var squares = $("td");
for(var i = 0; i < squares.length; i++ ){
  squares.eq(i).on("click", addLetter);
}

//create event listeners for each square

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

// //Determine winner and end game
// var winner = function() {
//   //row winner
//   if ()
//   //column winner
//   //diagonal winner
// };
//
// for (i = 1; i < 4; i++) {
//
// }
