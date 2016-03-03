$(document).ready(function(){

  for (var i = 0; i < 9; i++){
  $(".board").append("<div class=\"cell\" id=\""+i+"cell\" style=\"background-color:Green\"></div>");
}
$(".cell").html("X")
// $(".cell").prepend('<img id="x_image" src="x_image.png" />');









});
