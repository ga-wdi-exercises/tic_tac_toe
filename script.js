$("document").ready(function(){

  // function display(){
  //   console.log(this);
  //   //if odd clicks, an X will appear
  //   // clicks++
  //   // if (clicks % 2== 0)
  //   //set clicked div with an attribute
  // // this.text("O");
  // }

  // for (var i = 0; i < 9; i++){
  $(".square").each(function(){
    var click = 0
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

//when you click a box an "X" or "O" appears
//when you click on any first box an X appears
//first click(odd) = X
//second click(even) = O
//if player clicks even number of times = X
//if player clicks odd number of times = O


// function clickSquare (){
//   if (clicks % 2 ===0){
//   clicks++
//
//
// }
// }
// var squares[{
//     el : $("#a");
//   },
//   var square2 = $("#b");
//   var square3 = $("#c");
//   var square4 = $("#d");
//   var square5 = $("#e");
//   var square6 = $("#f");
//   var square7 = $("#g");
//   var square8 = $("#h");
//   var square9 = $("#i");
// }]
