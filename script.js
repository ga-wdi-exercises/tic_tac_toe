// create a 3x3 grid
  // get board
  // insert divs into board

  function TicTacToe() {
    this.board = $('.board');
    this.size = 3;

    var ttt = this;
    for(var i = 0; i < this.size; i++) {
      for(var j = 0; j < this.size; j++) {
        var square = $('<div class="square"><div class="xo">X</div></div>');
        square.appendTo(this.board);
        square.on('click', function() {
          ttt.makeAMark(square);
        });
      }
    }
  }

  TicTacToe.prototype.makeAMark = function (square) {
    $(square).html('O');
  };

var game = new TicTacToe();





// make grid visible
// on click, add a character to the grid, x or o
  // click also changes color of cell
  // click freezes cell so it can't be clicked again
// after each click, the character switches, x -> o, o -> x
// reset button to clear board and restart game
