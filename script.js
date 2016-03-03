$(document).ready(function() {

  var ticTacToe = new Game($('table'));
  ticTacToe.initCells();
});

function Game(element) {
  game = this;
  game.element = element;
  game.status = 1;
  game.moves = [];
  game.initCells = function() {
    for(var i = 0; i < $('td').length; i++) {
      $('td').eq(i).click(function() {
        game.handleClick($(this));
      });
    }
  }
  game.handleClick = function(cell) {
    if(game.status === 1) {
      cell.html('x');
      game.moves.push('x');
      game.status = 0;
    } else {
      cell.html('o');
      game.moves.push('o');
      game.status = 1;
    }
    console.log(game.moves);
  };
  $('h2').click(function() {
    game.status = 1;
    $('td').html('');
  })
}
