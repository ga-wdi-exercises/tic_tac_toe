 var box = $(".box");
 var activeBox = $(".box").eq("")
var counter= 0;
var winningBoxes=[
[box.eq("0"),box.eq("1"),box.eq("2")],
// [3,4,5],
// [6,7,8],
// [0,3,6],
// [1,4,7],
// [2,5,8],
// [0,4,8],
// [6,4,2]
]
var reset;

$(".box").toArray()

for (var i=0; i < 1; i++) {
$(".box").click(function() {
if (counter%2===0) {
  $(this).css("background-color", "blue")
 $(this).html("x")
 counter = counter + 1;
if ($(this)===winningBoxes){
   $(this).css("background-color", "yellow")
 }
}

else {
      $(this).css("background-color", "green")
       $(this).html("o")
        counter = counter + 1;
  }



});
}




  //   && board[[index][0]] == board[winningBoxes[index][2]]
  //   && board[winningBoxes[index][0]] != " "){
  //     reset = true;
  //  }
