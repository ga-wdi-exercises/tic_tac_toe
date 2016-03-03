$(document).ready(function(){


  //game places object
  var places ={

    1: $("#ichi"),
    2: $("#ni"),
    3: $("#san"),
    4: $("#jyuuichi"),
    5: $("#jyuuni"),
    6: $("#jyuusan"),
    7: $("#nijyuuichi"),
    8: $("#nijyuuni"),
    9: $("#nijyuusan")
  };


  // $("#gameboard").click(function(){

  //ichi's text replaces jyuusan
  // var temp =$("#ichi").text();
  // $("#ichi").text($("#jyuusan").val());
  // $("#jyuusan").text(temp);

  //click events on each individual td
  var size = Object.keys(places).length;
  for (var i = 1; i <= size; i++) {
    console.log(places[i]);
    this.onclick = function(){      console.log("I'm " + places[i]);
  };
}

  
// });

//if the user clicks on a section, a char should appear


});
