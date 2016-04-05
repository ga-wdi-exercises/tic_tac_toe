$("document").ready(function(){
  waysToWin = [
  ["#a","#b","#c"],
  ["#d","#e","#f"],
  ["#g","#h", "#i"],

  ["#a", "#d", "#g"],
  ["#b", "#e", "#h"],
  ["#c", "#f", "#i"],

  ["#a", "#e", "#i"],
  ["#c", "#e", "#g"],
  ]
  winner()


  var click = 0;

  function winner() {
    // console.log($(waysToWin[0]).text())
    for (var wayToWinIndex = 0; wayToWinIndex < waysToWin.length; wayToWinIndex++){
      var currentWayToWin = waysToWin[wayToWinIndex]
      for (i = 0; i <currentWayToWin.length; i++){
        // console.log(currentWayToWin[wayToWinIndex]);

      };
    }
      // if (currentWayToWin[0] ==){
      //
      // }
    //   // if $(waysToWin[0][0]).text("X")))
  };


  function oddOrEven() {
      $(this).on("click", function(){
        click++

        console.log("it clicked");

        if(click % 2 == 0){
          $(this).text("O");
          winner()
          console.log("its even");
        }
          else{
          $(this).text("X");
          console.log("it's odd")
          winner()
        }
      })
  }


  $(".square").each(oddOrEven)
//If there are 3 x's in a row the x wins
//
//if there are 3 o's in a row the o wins

})
