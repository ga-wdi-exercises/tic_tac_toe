$("document").ready(function(){



var click = 0
  // for (var i = 0; i < 9; i++){
  $(".square").each(function(){

    $(this).on("click",(function(){
      click++
      console.log("it clicked");

      if(click % 2 == 0){
          $(this).text("O");
          console.log("its even");
          }
          else{
          $(this).text("X");
          console.log("it's odd")
        }
    }));
  })


})
