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
          },
  clicks:   function() {
              for (var i = 0; i < $('.clickable').length; i++){
              $('.clickable').eq(i).on("click", function() {
                if (ttt.counter%2===0){
                  console.log($(this));
                 $(this).html("x").off("click");
               ttt.counter+=1;}
                 else {$(this).html("o").off("click");
               ttt.counter+=1;}
              });
              }
            }
};

ttt.createBoard();
ttt.addReset();
ttt.clicks();
