var ttt = {
  counter: 0,
  createBoard: function() {
                  for (var i=1; i<=9; i++){
                    var newDiv = $('<div '+'id='+i+'></div>').addClass("clickable");
                    $('.grid').append(newDiv);
                  }
                },
  addReset: function(){
              $('body').append("<button>Reset</button>");
              ttt.reset();
            },
  clicks:   function() {
              for (var i = 0; i < $('.clickable').length; i++){
              $('.clickable').eq(i).on("click", function() { //jshint ignore:line
                if (ttt.counter%2===0){
                 $(this).html("X").off("click").css("backgroundColor","rgb(17, 188, 17");
                 ttt.counter+=1;
                 $('p').html("Next Move: O");
                }else{
                 $(this).html("O").off("click").css("backgroundColor","rgb(13, 141, 141)");
                 ttt.counter+=1;
                 $('p').html("Next Move: X");
                }
               });
              }
            },
reset: function() {$('button').on("click", function() {
        $('.clickable').remove();
        ttt.counter = 0;
        ttt.createBoard();
        ttt.clicks();
        $('p').html("Next Move: X");
        });
       }
};

ttt.createBoard();
ttt.clicks();
ttt.addReset();
