var clicks = 0;

var ticTacToe = {
  boxSelector: $(".box"),
  xClicked: [],
  oClicked: [],
  eventListener: function() {
    //accepts the mouseclick/mouseover and adds an attribute to the HTML box classes to be selected later
    for(var i = 0; i < this.boxSelector.length; i++){
      this.boxSelector.eq(i).attr("data-index",i);
      this.boxSelector[i].addEventListener("mouseover", this.mouseOver);
      this.boxSelector[i].addEventListener("mouseout", this.mouseOut);
      this.boxSelector.eq(i).on("click", this.mouseClick);
    }
  },
  mouseClick: function(event) {
    event.preventDefault();
    var boxNumber = parseInt(this.getAttribute("data-index"));
    if (clicks === 0 || ticTacToe.flipChecker(boxNumber)){
      clicks++;
      ticTacToe.turnChecker(boxNumber);
    }
  },
  mouseOver: function(event) {
    event.preventDefault();
    var boxNumber = parseInt(this.getAttribute("data-index"));
    ticTacToe.boxSelector.eq(boxNumber).css("backgroundColor", "gray");
    if(ticTacToe.flipChecker(boxNumber)) {
      if (clicks % 2 === 1) {
        ticTacToe.boxSelector.eq(boxNumber).html("O");
      } else if (clicks % 2 === 0) {
        ticTacToe.boxSelector.eq(boxNumber).html("X");
      }
    }
  },
  mouseOut: function(event) {
    event.preventDefault();
    var boxNumber = parseInt(this.getAttribute("data-index"));
    ticTacToe.boxSelector.eq(boxNumber).css("backgroundColor", "#282c37");

  },
  flipChecker: function(boxNumber){
    var tileColor = ticTacToe.boxSelector.eq(boxNumber).css("color");
    if(tileColor != "rgb(43, 144, 217)" && tileColor != "rgb(217, 225, 232)") {
      return true;
    } else {
      return false;
    }
  },
  turnChecker: function(boxNumber){
    if (clicks % 2 === 1) {
      ticTacToe.boxSelector.eq(boxNumber).css("color","#2b90d9");
      ticTacToe.tileTurner(boxNumber, "X", ticTacToe.xClicked);
    } else if (clicks % 2 === 0) {
      ticTacToe.boxSelector.eq(boxNumber).css("color","#d9e1e8");
      ticTacToe.tileTurner(boxNumber, "O", ticTacToe.oClicked);
    }
  },
  tileTurner: function (boxNumber, player, array){
    ticTacToe.boxSelector.eq(boxNumber).html(player);
    array.push(ticTacToe.boxSelector.eq(boxNumber).attr("data-index"));
    ticTacToe.checker(array,player);
  },
  rowChecker: function (clicked) {
    if(clicked.includes("0") && clicked.includes("1") && clicked.includes("2") || clicked.includes("3") && clicked.includes("4") && clicked.includes("5") ||  clicked.includes("6") && clicked.includes("7") && clicked.includes("8")) {
      return true;
    }
  },
  columnChecker: function (clicked) {
    if(clicked.includes("0") && clicked.includes("3") && clicked.includes("6") || clicked.includes("1") && clicked.includes("4") && clicked.includes("7") ||  clicked.includes("2") && clicked.includes("5") && clicked.includes("8")) {
      return true;
    }
  },
  diagonalChecker: function (clicked) {
    if(clicked.includes("0") && clicked.includes("4") && clicked.includes("8") || clicked.includes("2") && clicked.includes("4") && clicked.includes("6")) {
      return true;
    }
  },
  checker: function(clicked, player) {
    if(this.rowChecker(clicked) || this.columnChecker(clicked)|| this.diagonalChecker(clicked)){
      alert (player + " wins!");
      this.reset();
    }
  },
  reset: function(){
    ticTacToe.xClicked = [];
    ticTacToe.oClicked = [];
    clicks = 0;
    for(var i = 0; i < ticTacToe.boxSelector.length; i++){
      ticTacToe.boxSelector.eq(i).html(i + 1);
      ticTacToe.boxSelector.eq(i).css("color", "#282c37");
      ticTacToe.boxSelector.eq(i).css("backgroundColor", "#282c37");
    }
  }
};

ticTacToe.eventListener();

$('input[type=button]').on("click", ticTacToe.reset);
