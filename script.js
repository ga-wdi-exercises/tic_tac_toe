$(document).ready(function(){

  //array of board places
  var places =[
    $("#ichi"),
    $("#ni"),
    $("#san"),
    $("#jyuuichi"),
    $("#jyuuni"),
    $("#jyuusan"),
    $("#nijyuuichi"),
    $("#nijyuuni"),
    $("#nijyuusan")
  ];

  $("#gameboard").hover(function(){

    //click events on each individual td
    for( var i = 0; i < places.length; i++ ){
      (function(area) {
        $(area).click(function(){ console.log(area);
          area.text("x");
        });
      })(places[i]);
    }

    //if the user clicks on a section, a char should appear

    //if we get the element that is clicked by it's #id then we can add text to that spot (td) --> $("#ni").text("x")
    //so when the element is clicked, add text





  });
});
