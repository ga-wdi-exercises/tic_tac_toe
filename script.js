$(document).ready(function(){
  ticTacToe = {
    XorO:['url("LETTERO.png")',' url("LETTERX.jpg")'],
    clickCount: 1,
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
    declareWinner: function(){
      if ((ticTacToe.clickCount/2)==1){
        alert('O WINS!');
        ticTacToe.resetGame()
        }
      else {
        alert('X WINS!');
        ticTacToe.resetGame()
      }
    },
    whichClick: function(){
      if((ticTacToe.clickCount/2)==1){
        $(this).css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
        ticTacToe.clickCount--;
        $(this).addClass('unclickable');
        console.log($(this));
        ticTacToe.getWinner();
        $('.whosTurn').css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
      }
      else{
        $(this).css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
        ticTacToe.clickCount++;
        $(this).addClass('unclickable');
        console.log($(this));
        ticTacToe.getWinner();
        $('.whosTurn').css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
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

        ticTacToe.resetGame();
      }
    },
    resetGame: function(){
      $('.square').css('background-image','');
      $('.whosTurn').css('background-image','')
      ticTacToe.clickCount = 1
    }
}
$('.square:not(.unclickable)').on('click',ticTacToe.whichClick);
$('.reset').on('click',ticTacToe.declareWinner);
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
