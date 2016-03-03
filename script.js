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

var turn = 0;

//create function to add X and O

var addX = function() {
  grid.sq12.text("X");
};

var addO = function() {
  grid.sq13.text("O");
};

addLetter = function() {

  //if turn = even
  if (turn % 2 === 0) {
    //click event should append X to appropriate square
    console.log(this);
    $(this).text("X");
  }
  //if turn = odd
  else {
    //click event should append O to appropriate square
    $(this).text("O");
  }
  turn += 1;   //Even though this action is in the function scope, it is updating the value of a global variable.  So even thought turn = 0 in global scope, after you click, it refers to the global variable and updates it by one.

  //after click event, turn variable should increase by one while turn < 9 (there will be no more than 9 turns)
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
