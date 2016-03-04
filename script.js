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
    winner: "",
    beginGame: function() {
      for (var i= 0; i<this.squares.length; i++) {
        this.squares[i].addEventListener("click", this.nextTurn);
      }
    },
    nextTurn: function() {
      var self = game;
      var square = this.firstElementChild;

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

      if (self.turns >= 3) {
        var winningCombos = [self.colLeft, self.colMid, self.colRight, self.rowTop, self.rowMid, self.rowBot, self.diagOne, self.diagTwo];

        for (var i= 0; i < winningCombos.length; i++) {
          self.assessWinner(winningCombos[i]);
        }

        self.assessTie();
      }
    },
    assessWinner: function(line) {
      var lineOfThree = [];

      for (var i= 0; i<line.length; i++) {
        lineOfThree.push(line[i].innerHTML);
      };

      console.log(lineOfThree);

      if (lineOfThree[0] === lineOfThree[1] && lineOfThree[1] === lineOfThree[2] && lineOfThree[0] != 0) {
        this.winner = lineOfThree[0];

        alert("The winner is: " + this.winner);
      }
    },
    assessTie: function() {
      if (this.winner === "" && this.turns === 9) {
        alert("It's a tie!");
      };
    }
  };

  game.beginGame();

});
