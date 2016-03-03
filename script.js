      $(document).ready(function(){

      var message= $(".messages");
      var turn = $(".turn");
      var table = $(".table");
      var cells = $(".cell");
      var reset = $(".reset");
      var counter= 0;


      function playerMoves(){
       if (counter == 0){
      $(this).text("X").addClass("x");
      counter++;
      } else if (counter == 1){
      $(this).text("O").addClass("o");
      counter--;
    }
  };


    function eventListener(){
     cells.click(playerMoves);

    }

    eventListener();
  });
  //
  //   function addLetter(){
  //   console.log(this);
  //   $(this).text("X");
  //   }
  //
  //  eventListener();
  //
  //
  //   function eventListenerTwo() {
  //   cells.click(addLetterTwo);
  //    }
  //
  //   function addLetterTwo(){
  //   console.log(this);
  //   $(this).text("O");
  // }
  //
  // eventListenerTwo();

//
