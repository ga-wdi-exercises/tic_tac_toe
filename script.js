
var game = {
  els: {
    playArea: $(".play-area"),
    resetButton: $(".reset"),
    nextPlayer: $(".next-player")
  },
  playersTurn: 1,
  players: [],
  tileGrid: [],

  buildGameboard: function() {
    for (var i = 0; i < 9; i++) {
      var newTile = $("<div></div>").addClass("tile");
      this.els.playArea.append(newTile);
    }

    this.els.tiles = $(".tile");
    this.els.nextPlayer.attr("class", "next-player").addClass("x").html("<span>X</span>");
  },

  makeClickable: function() {
    var self = this;
    for (var i = 0; i < self.els.tiles.length; i++) {
      self.els.tiles.eq(i).on("click", self.displayXO);
    }
  },

  groupTiles: function() {
    for (var i = 0, j = 0; i < 3; i++) {
      var group = this.els.tiles.splice(j, 3);
      this.tileGrid.push(group);
    }
    console.log(this.tileGrid);
  },

  displayXO: function(event) {
    if (game.playersTurn % 2 !== 0) {
      $(event.target).addClass("x").html("<span>X</span>").off("click");
      game.els.nextPlayer.attr("class", "next-player").addClass("o").html("<span>O</span>");
      game.playersTurn++;
    } else {
      $(event.target).addClass("o").html("<span>O</span>").off("click");
      game.els.nextPlayer.attr("class", "next-player").addClass("x").html("<span>X</span>");
      game.playersTurn++;
    }
  },

  resetGame: function() {
    for (var i = 0; i < game.els.tiles.length; i++) {
      game.els.tiles.removeClass("x o");
      game.els.tiles[i].innerText = "";
    }
    game.playersTurn = 1;
    game.els.playArea.empty();
    game.buildGameboard();
    game.makeClickable();
  }
};

game.buildGameboard();
game.makeClickable();

game.els.resetButton.on("click", game.resetGame);
