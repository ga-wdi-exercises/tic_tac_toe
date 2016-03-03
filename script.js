$(document).ready(function() {

  game = {
    squares: document.querySelectorAll(".square"),
    playerTurn: "X",
    turns: 0,
    colLeft: $("#one, #four, #seven"),
    colMid: $("#two, #five, #eight"),
    colRight: $("#three, #six, #nine"),
    rowTop: $("#one, #two, #three"),
    rowMid: $("#four, #five, #six"),
    rowBot: $("#seven, #eight, #nine"),
    diagOne: $("#one, #five, #nine"),
    diagTwo: $("#three, #five, #seven"),
    beginGame: function() {
      for (var i= 0; i<this.squares.length; i++) {
        this.squares[i].addEventListener("click", this.nextTurn);
      }
    },
    nextTurn: function() {
      var self = game;
      var square = this.firstElementChild;

      console.log(self.colLeft);

      if (square.innerHTML != "X" && square.innerHTML != "O") {
        if (self.playerTurn === "X") {
          square.innerHTML = "X";

          square.classList.add("x");

          self.playerTurn = "O";

          self.turns++;
        } else if (self.playerTurn === "O") {
          square.innerHTML = "O";

          square.classList.add("o");

          self.playerTurn = "X";

          self.turns++;
        };
      };

      if (self.turns === 9) {
        self.assessWinner(self.colLeft);

        // console.log(self.colLeft);
      }
    },
    assessWinner: function(line) {
      var lineOfThree = [];

      for (var i= 0; i<line.length; i++) {
        lineOfThree.push.line[i].html();
      };

      console.log(lineOfThree)
    }
  };

  game.beginGame();

});
