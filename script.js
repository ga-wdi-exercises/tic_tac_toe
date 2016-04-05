$("document").ready(function(){
  console.log("jq working");
// Prevents script.js from running until document is loaded and ready.

clickCounter = 0;

playBlock = function(){
  $('.block').click(function(){
      console.log(this.id);
      var clickBlock = this.id;
      console.log(clickBlock);
      $(this).addClass("clicked");
      if (clickCounter % 2 == 0){
        $(this).html("X");
      }
      else {
        $(this).html("O");
      }
      clickCounter++;
    });
}
playBlock();

boardReset = function(){
  $("#reset").click(function(){
    $('.block').html("T");
    $('.block').removeClass("clicked")
  })
};
boardReset();















});
