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
              console.log(area.html());
              input++;
            }else{
              area.text("o");
              input++;
            }
          }


        });
      })(places[i]);
    }





  });

  //reset page
  $("h3").click(function(){
    location.reload();
  });
});
