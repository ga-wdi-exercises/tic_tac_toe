var ttt = {
  createBoard: function() {
                for (var i=1; i<=9; i++){
                  var newDiv = $('<div></div>').addClass("clickable");
                  $('.grid').append(newDiv);
                }
              },
  addReset: function(){
            $('body').append("<button>Reset</button>");
            }
  };

ttt.createBoard();
ttt.addReset();
