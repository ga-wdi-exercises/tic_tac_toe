

$("#box1").on('click' , function(){
  $("#box1").html("X");
});
$("#box2").on('click' , function(){
  $("#box2").html("O");
});
$("#box3").on('click' , function(){
  $("#box3").text("O");
});
$("#box4").on('click' , function(){
  $("#box4").text("O");
});
$("#box5").on('click' , function(){
  $("#box5").text("X");
});
$("#box6").on('click' , function(){
  $("#box6").text("X");
});
$("#box7").on('click' , function(){
  $("#box7").text("X");
});
$("#box8").on('click' , function(){
  $("#box8").text("O");
});
$("#box9").on('click' , function(){
  $("#box9").text("X");
});


function reset() {

  for (var i = 0; i < 9; i++) {
  $(".box").eq(i).html("");
  }

}
$('button').on("click", reset);
