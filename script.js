var squaresArray = ["1","2","3",
"4","5","6",
"7","8","9"];

var winnerArray = ["1","2","3"];

var playerTurn = true;
var player1 = [];
var player2 = [];


  setUpSquares();
  function setUpSquares(){
    var board = $("#board");
    for(var i=0; i<squaresArray.length; i++){
      var squares = $("<div class=squares>");
      var text = $("<p class=textStyle>");
      squares.append(text);
      text.append(squaresArray[i]);
      //squares.html(squaresArray[i]);
      board.append(squares);
      squares.on("click", changeSquare);
    }
  }

  function changeSquare() {
    if(playerTurn===true){
      var text = $(this).text();
      $(this).addClass("x");
      $(this).off("click");
      player1.push(text);
      /////////////////
      if (player1.length===3){
        console.log("more than 3");
        for(var i=0; i<player1.length; i++){
          if($.inArray(player1[i], winnerArray) !== -1){
            console.log("is in array");

          } else {
            console.log("not in array");
          }
        }
      }
      ////////////
      return playerTurn=false;
    }
    if(playerTurn===false){
      var text = $(this).text();
      $(this).addClass("circle");
      $(this).off("click");
      player2.push(text);
      return playerTurn=true;
    }
    if (player1.length===3){
      console.log("more than 3");
      /*for(var i=0; i<player1.length; i++){
      if($.inArray(player1[i].toString(), squaresArray) !== -1){
      console.log("is in array");
    }
  }*/
}
}


$("h2").click(function(){
  $(".squares").removeClass("x");
  $(".squares").removeClass("circle");
  var squares = $("<div class=squares>")
  //  squares.on("click");
  setUpSquares();

});

//$.inArray(value, array)



//http://www.hongkiat.com/blog/jquery-insert-element-part1/

/*
$(" ")                 = document.querySelectorAll(" ")
$(" ").eq(1)           = document.querySelectorAll(" ")[]
$(" ").eq(1).html()    = document.querySelectorAll(" ")[]
.html()                = .innerHTML
$(".x:nth-child(3)")    = getting third element with class x

$("body").css("color","red"); // change color
$("body").css("color"); // get color
$("img").prop("src", "a.jpg")
$("img").eq(1).prop("alt") // returns alt of image

*/
