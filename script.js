$("document").ready(function(){
  console.log("jq working");
// Prevents script.js from running until document is loaded and ready.

clickCounter = 0;

playBlock = function(){
  $('.block').click(function(){
      var clickBlock = this.id;
      // console.log(clickBlock);
      if ($(this).hasClass("clicked")){
        console.log("nope");
        return;
        }
      else{
        $(this).addClass("clicked");
        if (clickCounter % 2 == 0){
          $(this).html("X");
          $("p").html("Player O's turn!");
        }
        else {
          $(this).html("O");
          $("p").html("Player X's turn!");
        }
        checkWinner();
        clickCounter++;
        console.log($(this).html());
      };
    });
};

playBlock();

boardReset = function(){
  $("#reset").click(function(){
    $('.block').html("T");
    $('.block').removeClass("clicked")
    $("p").html("Player X goes first. Click a square to begin!");
    clickCounter = 0;
  })
};
boardReset();


checkWinner = function(){
  console.log("checkwinner");
  // check horizontal 1-3
    if (($("#block1").html() == $("#block2").html()) && ($("#block2").html() == $("#block3").html())){
      if ($("#block1").html() == "T"){
        return;
      }
      else {
        console.log("line 48");
       alert($("#block1").html() + " wins 53");
      }
     }
     // check vertical 1-7
    if (($("#block1").html() == $("#block4").html()) && ($("#block4").html() == $("#block7").html())){
      if ($("#block1").html() == "T"){
        return;
      }
      else{
       alert($("#block1").html() + " wins 62");
      }
    }
    
    //check horizontal 4-6
     if (($("#block4").html() == $("#block5").html()) && ($("#block5").html() == $("#block6").html())){
       console.log($("#block4").html() + " wins");
       if ($("#block4").html() == "T"){
         return;
       }
       else{
         console.log("line 73");
        alert($("#block4").html() + " wins");
       }
     }
     //check horizontal 7-9
    if (($("#block7").html() == $("#block8").html()) && ($("#block8").html() == $("#block9").html())){
      //  console.log($("#block7").html() + " wins");
       if ($("#block7").html() == "T"){
         return;
       }
       else{
        alert($("#block7").html() + " wins");
       }
     }
     // check vertical 2-5-8
    if (($("#block2").html() == $("#block5").html()) && ($("#block5").html() == $("#block8").html())){
       console.log($("#block2").html() + " wins");
       if ($("#block2").html() == "T"){
         return;
       }
       else{
        alert($("#block2").html() + " wins 93");
       }
     }
     // check vertical 3-6-9
    if (($("#block3").html() == $("#block6").html()) && ($("#block6").html() == $("#block9").html())){
       console.log($("#block3").html() + " wins");
       if ($("#block3").html() == "T"){
         console.log("line 94")
         return;
       }
       else{
        alert($("#block3").html() + " wins 104");
       }
     }
     // check diagonal 1-5-9
    if (($("#block1").html() == $("#block5").html()) && ($("#block5").html() == $("#block9").html())){
       console.log($("#block1").html() + " wins");
       if ($("#block1").html() == "T"){
         return;
       }
       else{
        alert($("#block1").html() + " wins");
       }
     }
     // check diagonal 3-5-7
    if (($("#block3").html() == $("#block5").html()) && ($("#block5").html() == $("#block7").html())){
       console.log($("#block3").html() + " wins");
       if ($("#block3").html() == "T"){
         return;
       }
       else{
        alert($("#block3").html() + " wins");
       }
 }
 console.log("exit checkWinner");
};












});
