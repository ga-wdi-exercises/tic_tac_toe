var ttt = {
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
                 $(this).html("x");
                console.log(this);
              });
              }
            },
box1click: function(){
            $("#1").on("click", function() {
              console.log('THIS WORKS');
            })
          }
};

ttt.createBoard();
ttt.addReset();
ttt.clicks();
ttt.box1click();
