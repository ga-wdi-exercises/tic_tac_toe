  $(document).ready(function() {
    playGame();
    // changeTurn();
    resetButton();
  });
    var turn = "X";
    var Xselections = [];
    var Oselections = [];
    var wins = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["3", "6", "9"],
      ["1", "5", "9"],
      ["7", "5", "3"]
  ];

    function playGame() {
      $(".square").on("click", function() {
        $(this).html(turn);
        changeTurn();
        if (turn == "X") {
          $(this).addClass("dark");
          Oselections.push(this.id);
          for (var i = 0; i < wins.length; i++) {
            if (checkForWin(wins[i], Oselections)) {
              $(".info").html("O's win!");
              $(".square").off();
            }
          }
        } else {
          $(this).addClass("light");
          Xselections.push(this.id);
          for (var j = 0; j < wins.length; j++) {
            if (checkForWin(wins[j], Xselections)) {
              $(".info").html("X's win!");
              $(".square").off();
            }
          }
        }
        $(this).off();
      });
    }

    function changeTurn() {
      if (turn == "X") {
        turn = "O";
      } else {
        turn = "X";
      }
      $(".info").html(turn + "'s turn");
    }

    function checkForWin(wins, selections){
      for(var i = 0; i < wins.length; i++){
         if($.inArray(wins[i], selections) == -1) return false;
      }
      return true;
    }

    function resetButton() {
      $(".reset").on("click", function() {
        $(".square").html("");
        $(".info").html(turn + "'s turn");
        $(".square").removeClass("light");
        $(".square").removeClass("dark");
        Oselections = [];
        Xselections = [];
        playGame();
      });
    }
