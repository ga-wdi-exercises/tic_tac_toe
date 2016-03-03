 var box = $(".box");
 var activeBox = $(".box").eq("")
var counter= 0;
$(".box").toArray()

for (var i=0; i < 1; i++) {
$(".box").click(function() {
if (counter%2===0) {
  $(this).css("background-color", "blue")
 $(this).html("x")
 counter = counter + 1;
}
else {
      $(this).css("background-color", "green")
       $(this).html("o")
        counter = counter + 1;
  }

});
}
