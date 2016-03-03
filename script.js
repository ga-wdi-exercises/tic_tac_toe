$(document).ready(function(){
  ticTacToe = {
    XorO:['url("LETTERO.png")',' url("LETTERX.jpg")'],
    clickCount: 1,

    whichClick: function(){
      if((ticTacToe.clickCount/2)==1){
        $(this).css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
        ticTacToe.clickCount--
        $('.whosTurn').css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1])
      }
      else{
        $(this).css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1]);
        ticTacToe.clickCount++
        $('.whosTurn').css('background-image',ticTacToe.XorO[ticTacToe.clickCount-1])
      }

    },
    resetGame: function(){
      $('.square').css('background-image','');
      $('.whosTurn').css('background-image','')
      ticTacToe.clickCount = 1
    }
}
$('.square').on('click',ticTacToe.whichClick);
$('.reset').on('click',ticTacToe.resetGame);







});
