$(document).ready(function() {
  var ticTacToe = new Game($('table'));
  ticTacToe.initCells();
});

function Game(element) {
  game = this;
  game.status = 1;
  game.moves = []; // use to find a winner
  game.initCells = function() {
    for(var i = 0; i < $('td').length; i++) {
      $('td').eq(i).click(function() {
        game.handleClick($(this));
      });
      $('td').eq(i).prop('id', 'cell' + i);
    }
  };
  game.handleClick = function(cell) {
    if(game.status === 1) {
      cell.html('X');
      cell.addClass('orange');
      //game.moves.push('X');
      game.status = 0;
    } else {
      cell.html('O');
      cell.addClass('blue');
      //game.moves.push('o');
      game.status = 1;
    }
  };
  $('h2').click(function() {
    game.status = 1;
    $('td').html('');
    $('.cells.orange').removeClass('orange');
    $('.cells.blue').removeClass('blue');
  })
};
