//create gameboard
//create div
//give div tile class
//append div to play-area
//when a user clicks an empty tile
//change the html content of that tile to display that user's piece ("X" or "O")
//it is now the next player's turn


var game = {
  els: {
    playArea: $(".play-area"),
    resetButton: $(".reset")
  },
  playersTurn: 1,
  players: [],
  tileGrid: [],

  // create gameboard
  //create div
  //give div tile class
  //append div to play-area

  buildGameboard: function() {
    for (var i = 0; i < 9; i++) {
      var newTile = $("<div></div>").addClass("tile");
      this.els.playArea.append(newTile);
    }
    this.els.tiles = $(".tile");
  },

  makeClickable: function() {
    var self = this;
    for (var i = 0; i < this.els.tiles.length; i++) {
      this.els.tiles.eq(i).on("click", function() {
        if (self.playersTurn % 2 !== 0) {
          $(this).addClass("x").html("<span>X</span>").off("click");
          self.playersTurn++;
          self.checkRowsForWinner();
        } else {
          $(this).addClass("o").html("<span>O</span>").off("click");
          self.playersTurn--;
          self.checkRowsForWinner();
        }
      });
    }
  },

  groupTiles: function() {
    for (var i = 0, j = 0; i < 3; i++) {
      var group = this.els.tiles.splice(j, 3);
      this.tileGrid.push(group);
    }
    console.log(this.tileGrid);
  },

  checkRowsForWinner: function() {
    for (var i = 0; i < this.tileGrid.length; i++) {
      var currentRow = this.tileGrid[i];
      if (currentRow[i])
      if (currentRow[0].innerText === currentRow[1].innerText && currentRow[1].innerText === currentRow[2].innerText){
        alert("Winner");
      }
    }
  },

  checkColsForWinner: function() {
    var self = this;
    this.tileGrid = this.tileGrid[0].map(function(col, i) {
      return self.tileGrid.map(function(row) {
        return row[i];
      });
    });
    this.checkRowsForWinner();
  },
  //determine a winner
  // make play area a grid [[x,x,x],   a thought here...
  // [x,x,x],    .map(arr[a][b] = arr[b][a])
  //    [x,x,x]]
  //check top, middle, and bottm rows for same letter.
  //.map() (above) check top middle and bottom row again.
  resetGame: function() {
    for (var i = 0; i < game.els.tiles.length; i++) {
      game.els.tiles.removeClass("x o");
      game.els.tiles[i].innerText = "";
      game.playersTurn = 1;
    }
    game.makeClickable();
  }
};
game.buildGameboard();
game.makeClickable();

game.els.resetButton.on("click", game.resetGame);
