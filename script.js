$("document").ready(function(){
  console.log("jq working");
// Prevents script.js from running until document is loaded and ready.

clickCounter = 0;

$('.block').click(function(){
    console.log(this.id);
    var clickBlock = this.id;
    console.log(clickBlock);
    // clickCounter++;
    // if (clickCounter % 2 = 0){
      $(this).html("x");
    // }
    // else {
    //   $(clickBlock).html(O);
    // }
});






















});
