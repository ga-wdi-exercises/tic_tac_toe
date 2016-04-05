function Board() {
  var squares;
  this.squares = [ [ "","","" ],
                   [ "","","" ],
                   [ "","","" ] ];
  this.clickCounter = 0;
  $(".square").click(setPiece);
  $("button").click(playTicTacToe);
}

window.onload=playTicTacToe();

function playTicTacToe(){
  gameBoard = new Board();
  $(".square").html('').css("background-color", "seashell").css("border", "5px double rgb(60,60,60)");
}

function setPiece(){
  //check to see if clicked
  var clickedEl = $(this);

  row = Math.floor( parseInt ( clickedEl.attr( "id" ) ) / 3 );
  col = parseInt( clickedEl.attr( "id" ) ) % 3;
  // change to x or o
  var piece;
  if (gameBoard.clickCounter % 2 === 0) {
    piece = "X";
  } else {
    piece = "O";
  }

  if (!gameBoard.squares[row][col]) {
    gameBoard.squares[row][col] = piece;
    $(".square").eq( 3 * row + col ).html( piece );
    //debugger;
    //change bg-color
    clickedEl.css("background-color", "rgb(0,0,0)").css("border", "5px double seashell");

    gameBoard.clickCounter++;
    checkWin();
  }
}

function checkWin(){
  //checks rows

    if ( gameBoard.squares[0][0]===gameBoard.squares[0][1] &&
         gameBoard.squares[0][0]===gameBoard.squares[0][2] ) {
        if(gameBoard.squares[0][0]){
           alert(gameBoard.squares[0][0] +" wins!");
        }
    }

    if ( gameBoard.squares[1][0]===gameBoard.squares[1][1] &&
         gameBoard.squares[1][0]===gameBoard.squares[1][2] ) {
           if(gameBoard.squares[1][0]){
              alert(gameBoard.squares[1][0] +" wins!");
           }
    }

    if ( gameBoard.squares[2][0]===gameBoard.squares[2][1] &&
         gameBoard.squares[2][0]===gameBoard.squares[2][2] ) {
           if(gameBoard.squares[2][0]){
              alert(gameBoard.squares[2][0] +" wins!");
           }
    }

    //checks columns
    if ( gameBoard.squares[0][0]===gameBoard.squares[1][0] &&
         gameBoard.squares[0][0]===gameBoard.squares[2][0] ) {
           if(gameBoard.squares[0][0]){
              alert(gameBoard.squares[0][0] +" wins!");
           }
    }

    if ( gameBoard.squares[0][1]===gameBoard.squares[1][1] &&
         gameBoard.squares[0][1]===gameBoard.squares[2][1] ) {
           if(gameBoard.squares[0][1]){
              alert(gameBoard.squares[0][1] +" wins!");
           }
    }

    if ( gameBoard.squares[0][2]===gameBoard.squares[1][2] &&
         gameBoard.squares[0][2]===gameBoard.squares[2][2] ) {
        if(gameBoard.squares[0][2]){
           alert(gameBoard.squares[0][2] +" wins!");
        }
    }

    //checks diagonals

    if ( gameBoard.squares[0][0]===gameBoard.squares[1][1] &&
         gameBoard.squares[0][0]===gameBoard.squares[2][2] ) {
           if(gameBoard.squares[0][0]){
              alert(gameBoard.squares[0][0] +" wins!");
           }
    }

    if ( gameBoard.squares[2][0]===gameBoard.squares[1][1] &&
         gameBoard.squares[2][0]===gameBoard.squares[0][2] ) {
           if(gameBoard.squares[2][0]){
              alert(gameBoard.squares[2][0] +" wins!");
           }
    }
  }
