$(document).ready(function(){
  var box1 =$("#one")
  box1.on("click", function(){
  box1.css("background-color", "red")
  box1.html("X")
  })

$('.flip').click(function(){
  $(this).find('.box1').addClass('flipped');
});
});
