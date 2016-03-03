  $(document).ready(function() {
    addClick();
    changeTurn();
    resetButton();
  });
    var Xselections = [];
    var Oselections = [];
    var turn = "X";

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

    function changeTurn() {
      if (turn == "X") {
        turn = "O";
      } else {
        turn = "X";
      }
      $(".info").html(turn + "'s turn");
      if ($("#1").html() === $("#2").html() === $("#3").html()) {
          console.log("winner");
        }
    }

    function addClick() {
      $(".square").on("click", function() {
        $(this).html(turn);
        changeTurn();
        if (turn == "X") {
          $(this).addClass("dark");
          Oselections.push(this.id);
          for (var i = 0; i < wins.length; i++) {
            if (containsAll(wins[i], Oselections)) {
              console.log("O wins");
            }
          }
        } else {
          $(this).addClass("light");
          Xselections.push(this.id);
          for (var j = 0; j < wins.length; j++) {
            if (containsAll(wins[j], Xselections)) {
              console.log("X wins");
            }
          }
        }
        $(this).off();
      });
    }

    function resetButton() {
      $(".reset").on("click", function() {
        $(".square").html("");
        $(".square").removeClass("light");
        $(".square").removeClass("dark");
        Oselections = [];
        Xselections = [];
        addClick();
      });
    }

    function containsAll(needles, haystack){
      for(var i = 0 , len = needles.length; i < len; i++){
         if($.inArray(needles[i], haystack) == -1) return false;
      }
      return true;
    }
