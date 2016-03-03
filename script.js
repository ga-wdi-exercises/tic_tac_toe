console.log('scripts up...')

//init cells
initCells();
// make everything run through a game element
function Game(element) {
  Game = this;
  status = 1;
  moves = [];
  winCheck = function() {
    //method to loop thru array and see if consecutive moves happened
  };
  els = {
    cell: $('td .cells');
  };

}
//   use a constructor that takes the table element as an argument
//   properties:
//   property to keep track of status / who's turn
//   start with status = 1
//   array for user moves
//   method to loop thru array and see if consecutive moves happened
//   object that holds elements
//   event listener for cells
//     when status = 1
//       then 'x' is the input to the clicked cell
//       put an 'x' into the moves array
//       status = 0
//     when status = 0
//       then 'o' is the input to the clicked cell
//       put an 'o' into the moves array
//     call loop method to check for consecutive moves
//       if there are consecutive moves
//          display the winner with consecutive moves
//          do something like end game or ask if the users want to reset
//       else,
//          do nothing, status changes and users keep clicking
//    RESET method
//      clear all cells of text
//        call initCells()
//      moves array = []
//      status = 1
//    event listener for RESET element
//    calls reset method

function initCells() {
  var gameCells = $('td');
  for(var i = 0; i < gameCells.length; i++) {
    gameCells.eq(i).prop('id', 'cell' + i);
    gameCells.html('');
    console.dir(gameCells.eq(i));
  }
}
