// create a 3x3 grid
  // get board
  // insert divs into board

  function TicTacToe() {
    this.board = $('.board');
    this.size = 9;

    var ttt = this;
    for(var i = 0; i < this.size; i++) {
      var square = $('<div class="square"><div class="xo">X</div></div>');
      square.attr('id', i);
      square.appendTo(this.board);
      square.on('click', function() {
        console.log(square);
        //ttt.makeAMark();
      });
    }
  }

  TicTacToe.prototype.makeAMark = function (index) {
    console.log($('#'+index));


  };

var game = new TicTacToe();





// make grid visible
// on click, add a character to the grid, x or o
  // click also changes color of cell
  // click freezes cell so it can't be clicked again
// after each click, the character switches, x -> o, o -> x
// reset button to clear board and restart game
