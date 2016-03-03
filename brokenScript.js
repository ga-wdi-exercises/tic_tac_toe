$(document).ready(function(){
  ticTacToe = {
    XorO:['url("LETTERO.png")',' url("LETTERX.jpg")'],
    clickCount: 1,
    squareClicks: 0,
    chooseWhich: function(){
      if((ticTacToe.clickCount/2)==1){
        ticTacToe.clickCount--;
        $('.whosTurn').css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
      }
      else{
        ticTacToe.clickCount++;
        $('.whosTurn').css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
      }
    },
    closeChooser: function(){
      if (ticTacToe.squareClicks == 1){
        $('.whosTurn').off('click');

      }
    },
    whichClick: function(){
      $(this).off('click');
      if(ticTacToe.clickCount==2){
        $(this).css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
        ticTacToe.squareClicks++;
        ticTacToe.getWinner();
        ticTacToe.closeChooser();
        console.log(ticTacToe.clickCount)
        ticTacToe.clickCount--;
        $('.whosTurn').css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
        console.log(ticTacToe.clickCount);
      }
      else if (ticTacToe.clickCount==1){
        console.log("click count isn't 2")
        console.log(ticTacToe.XorO[ticTacToe.clickCount-1]);
        $(this).css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
        ticTacToe.squareClicks++;
        ticTacToe.closeChooser();
        ticTacToe.getWinner();
        console.log(ticTacToe.clickCount);
        ticTacToe.clickCount++;
        $('.whosTurn').css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
        console.log(ticTacToe.clickCount);
      }

    },
    declareWinner: function(){
      if (ticTacToe.clickCount == 1){
        alert('O WINS!');
        ticTacToe.resetGame()
        }
      else if (ticTacToe.clickCount == 2) {
        alert('X WINS!');
        ticTacToe.resetGame()
      }
    },
    getWinner: function(){

      if (sq0.css('background-image') == sq4.css('background-image') && sq4.css('background-image') == sq8.css('background-image')){ //NW-SE
        ticTacToe.declareWinner();
      }
      else if (sq2.css('background-image') == sq4.css('background-image') && sq4.css('background-image') == sq6.css('background-image')){ //NE-SW
        ticTacToe.declareWinner();
      }
      else if (sq0.css('background-image') == sq3.css('background-image') && sq3.css('background-image') == sq6.css('background-image')){ //NW-SW
        ticTacToe.declareWinner();
      }
      else if (sq1.css('background-image') == sq4.css('background-image') && sq4.css('background-image') == sq7.css('background-image')){ //N-S
        ticTacToe.declareWinner();
      }
      else if (sq2.css('background-image') == sq5.css('background-image') && sq5.css('background-image') == sq8.css('background-image')){ //NE-SE
        ticTacToe.declareWinner();
      }
      else if (sq0.css('background-image') == sq1.css('background-image') && sq1.css('background-image') == sq2.css('background-image')){ //NE-NW
        ticTacToe.declareWinner();
      }
      else if (sq3.css('background-image') == sq4.css('background-image') && sq4.css('background-image') == sq5.css('background-image')){ //E-W
        ticTacToe.declareWinner();
      }
      else if (sq6.css('background-image') == sq7.css('background-image') && sq7.css('background-image') == sq8.css('background-image')){ //SE-SW
        ticTacToe.declareWinner();
      }
      else if (ticTacToe.squareClicks >= 9){
        alert('out of moves!');
        ticTacToe.resetGame();
      }
    },
    resetGame: function(){
      ticTacToe.squareClicks = 0;
      ticTacToe.clickCount = 1;
      console.log(ticTacToe.squareClicks);
      console.log(ticTacToe.clickCount)
      $('.square').css('background-image','');
      $('.whosTurn').css('background-image','');
      $('.whosTurn').on('click',ticTacToe.chooseWhich);
      $('.square').on('click',ticTacToe.whichClick);
    }
}
$('.square').on('click',ticTacToe.whichClick);
$('.reset').on('click',ticTacToe.resetGame);
$('.whosTurn').on('click',ticTacToe.chooseWhich);

var sq0 = $('.square').eq(0);
var sq1 = $('.square').eq(1);
var sq2 = $('.square').eq(2);
var sq3 = $('.square').eq(3);
var sq4 = $('.square').eq(4);
var sq5 = $('.square').eq(5);
var sq6 = $('.square').eq(6);
var sq7 = $('.square').eq(7);
var sq8 = $('.square').eq(8);

});
