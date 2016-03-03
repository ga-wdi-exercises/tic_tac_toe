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
              $('.clickable').eq(i).on("click", function() {
                if (ttt.counter%2===0){
                  console.log($(this));
                 $(this).html("x").off("click").css("backgroundColor","red");
               ttt.counter+=1;}
                 else {$(this).html("o").off("click").css("backgroundColor","blue");
               ttt.counter+=1;}
              });
              }
            },
reset: function() {$('button').on("click", function() {
        $('.clickable').remove();
        ttt.counter = 0;
        ttt.createBoard();
        ttt.clicks();});
        }
};

ttt.createBoard();
ttt.clicks();
ttt.addReset();
