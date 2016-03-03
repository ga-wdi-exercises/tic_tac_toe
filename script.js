//create gameboard
//create div
//give div tile class
//append div to play-area
//when a user clicks an empty tile
//change the html content of that tile to display that user's piece ("X" or "O")
//it is now the next player's turn

//determine a winner
// make play area a grid [[x,x,x],   a thought here...
// [x,x,x],    .map(arr[a][b] = arr[b][a])
//    [x,x,x]]
//check top, middle, and bottm rows for same letter.
//.map() (above) check top middle and bottom row again.


$(document).ready(function() {

  var game = {
    els: {
      playArea: $(".play-area"),
      whoClicked: $(".tile span")
    },

    players: [],
    tileGrid: [],

    // create gameboard
      //create div
      //give div tile class
      //append div to play-area

    buildGameboard: function() {
      for (var i = 0; i < 9; i++) {
        var newTile = $("<div></div>").addClass("tile").html("<span>" + (i + 1)+ "</span");
        this.els.playArea.append(newTile);
      }
    },

    createTileGrid: function() {

    }

  };
  game.buildGameboard();
});
