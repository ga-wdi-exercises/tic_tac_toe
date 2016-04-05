$("document").ready(function(){
  console.log("jq working");
// Prevents script.js from running until document is loaded and ready.

clickCounter = 0;

playBlock = function(){
  $('.block').click(function(){
      var clickBlock = this.id;
      console.log(clickBlock);
      if ($(this).hasClass("clicked")){
        console.log("nope");
        return;
        }
      else{
        $(this).addClass("clicked");
        if (clickCounter % 2 == 0){
          $(this).html("X");
        }
        else {
        $(this).html("O");
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
  })
};
boardReset();


checkWinner = function(){
if (($("#block1").html() == $("#block2").html()) && ($("#block2").html() == $("#block3").html())){
   console.log($("#block1").html() + " wins");
 };
if (($("#block1").html() == $("#block4").html()) && ($("#block1").html() == $("#block7").html())){
   console.log($("#block1").html() + " wins");
 };
if (($("#block4").html() == $("#block5").html()) && ($("#block4").html() == $("#block6").html())){
   console.log($("#block4").html() + " wins");
 };
if (($("#block7").html() == $("#block8").html()) && ($("#block7").html() == $("#block9").html())){
   console.log($("#block7").html() + " wins");
 };
if (($("#block2").html() == $("#block5").html()) && ($("#block2").html() == $("#block8").html())){
   console.log($("#block2").html() + " wins");
 };
if (($("#block3").html() == $("#block6").html()) && ($("#block3").html() == $("#block9").html())){
   console.log($("#block3").html() + " wins");
 };
if (($("#block1").html() == $("#block5").html()) && ($("#block1").html() == $("#block9").html())){
   console.log($("#block1").html() + " wins");
 };
if (($("#block3").html() == $("#block5").html()) && ($("#block1").html() == $("#block7").html())){
   console.log($("#block3").html() + " wins");
 };
};













});
