console.log('scripts up...')
//initialize cells with event listeners and no text
var gameCells = $('td');
for(var i = 0; i < gameCells.length; i++) {
  gameCells.eq(i).click(function() {
    ticTacToe.handleClick($(this));
  });
  gameCells.eq(i).prop('id', 'cell' + i);
}
var table = $('table');
var ticTacToe = new Game(table);

// make everything run through a game element
function Game(element) {
  game = this;
  game.element = element;
  game.status = 1;
  game.moves = [];
  game.reset = $('h2');
  game.winCheck = function() {
    //method to loop thru array and see if consecutive moves happened
  };
  game.handleClick = function(cell) {
    if(game.status === 1) {
      cell.html('x');
      game.status = 0;
    } else {
      cell.html('o');
      game.status = 1;
    }
    console.log(cell);
  };
  game.reset.click(function() {
    game.status = 1;
    gameCells.html('');
  })
}
