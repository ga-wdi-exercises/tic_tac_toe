$(document).ready(function(){

  //array of board places
  var places =[
    $("#row1col1"),
    $("#row1col2"),
    $("#row1col3"),
    $("#row2col1"),
    $("#row2col2"),
    $("#row2col3"),
    $("#row3col1"),
    $("#row3col2"),
    $("#row3col3")
  ];

  $("#gameboard").hover(function(){
    var input = 0;

    //click events on each individual td
    for( var i = 0; i < places.length; i++ ){
      (function(area) {
        $(area).click(function(event){

          //if there is something already there, don't change the text
          if((area.text() == "o") || (area.text() == "x")){
            event.preventDefault();
          }
          else{
            //toggling x and o
            if(input%2 === 0){
              area.text("x");
              //console.log(area.html());
              input++;
            }else{
              area.text("o");
              input++;
            }

            //determing winner

            //winner of rows
            var rowXWins = ($("#row1").children().text() == "xxx") || ($("#row2").children().text() == "xxx") || ($("#row3").children().text() == "xxx");
            var rowOWins = ($("#row1").children().text() == "ooo") || ($("#row2").children().text() == "ooo") || ($("#row3").children().text() == "ooo");

            //columns logic
            var col1 = ($("#row1col1").text() && $("#row2col1").text() && $("#row3col1").text());
            var col2 = ($("#row1col2").text() && $("#row2col2").text() && $("#row3col2").text());
            var col3 = ($("#row1col3").text() && $("#row2col3").text() && $("#row3col3").text());


            //winner of columns
            var colXWins = (col1 == "x") || (col2 == "x") || (col3 == "x");
            var colOWins = (col1 == "o") || (col2 == "o") || (col3 == "o");

            //diagonal logic
            var diag1 = ($("#row1col1").text() && $("#row2col2").text() && $("#row3col3").text());
            var diag2 = ($("#row1col3").text() && $("#row2col2").text() && $("#row3col1").text());

            //winner of diagonal
            var diagXWins = (diag1 == "x" || diag2 == "x");
            var diagOWins = (diag1 == "o" || diag2 == "o")

            if(rowXWins || colXWins || diagXWins){
              console.log("X wins!");
            }else if(rowOWins || colOWins || diagOWins){
              console.log("O wins!");
            }

          }


        });
      })(places[i]);
    }


    //reset page
    $("h3").click(function(){
      location.reload();
    });
  });

});
//no man's land
//if a row is done then u win!
