$("document").ready(function(){

table = [
["#a","#b","#c"],
["#d","#e","#f"],
["#g","#h", "#i"],
]


var click = 0;

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
//If there are 3 x's in a row the x wins
//
//if there are 3 o's in a row the o wins

})
