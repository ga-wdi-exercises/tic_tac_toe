var clicks = 0;

function paint() {
    $(".square").on("click", function (){

      clicks++;

      if(clicks % 2 === 0) {
        $(this).addClass("player-two");
        $("#turn").html("First Player Turn");
      } else {
        $(this).addClass("player-one");
        $("#turn").html("Second Player Turn");
      } console.log(this);
      $(this).off();
      getWinner();
    });
  }
paint();

function reset() {
    clicks = 0;
    $(".square").removeClass("player-one");
    $(".square").removeClass("player-two");
    $("#turn").html("First Player Turn");
    paint();
}

$("button").on("click", reset);

function getWinner() {
  if($("#0").hasClass("player-one") &&
     $("#1").hasClass("player-one") &&
     $("#2").hasClass("player-one")) {
     alert("PLAYER ONE IS A BEAST!!");
  } else if(
     $("#3").hasClass("player-one") &&
     $("#4").hasClass("player-one") &&
     $("#5").hasClass("player-one")) {
     alert("PLAYER ONE IS A BEAST!!");
   } else if(
     $("#6").hasClass("player-one") &&
     $("#7").hasClass("player-one") &&
     $("#8").hasClass("player-one")) {
     alert("PLAYER ONE IS A BEAST!!");
   } else if(
     $("#0").hasClass("player-one") &&
     $("#3").hasClass("player-one") &&
     $("#6").hasClass("player-one")) {
     alert("PLAYER ONE IS A BEAST!!");
   } else if(
     $("#1").hasClass("player-one") &&
     $("#4").hasClass("player-one") &&
     $("#7").hasClass("player-one")) {
     alert("PLAYER ONE IS A BEAST!!");
   } else if(
     $("#2").hasClass("player-one") &&
     $("#5").hasClass("player-one") &&
     $("#8").hasClass("player-one")) {
     alert("PLAYER ONE IS A BEAST!!");
   } else if(
     $("#0").hasClass("player-one") &&
     $("#4").hasClass("player-one") &&
     $("#8").hasClass("player-one")) {
     alert("PLAYER ONE IS A BEAST!!");
   } else if(
     $("#2").hasClass("player-one") &&
     $("#4").hasClass("player-one") &&
     $("#6").hasClass("player-one")) {
     alert("PLAYER ONE IS A BEAST!!");
   } else if(
     $("#0").hasClass("player-two") &&
     $("#1").hasClass("player-two") &&
     $("#2").hasClass("player-two")) {
     alert("PLAYER TWO IS A BEAST!!");
   } else if(
     $("#3").hasClass("player-two") &&
     $("#4").hasClass("player-two") &&
     $("#5").hasClass("player-two")) {
     alert("PLAYER TWO IS A BEAST!!");
   } else if(
     $("#6").hasClass("player-two") &&
     $("#7").hasClass("player-two") &&
     $("#8").hasClass("player-two")) {
     alert("PLAYER TWO IS A BEAST!!");
   } else if(
     $("#0").hasClass("player-two") &&
     $("#3").hasClass("player-two") &&
     $("#6").hasClass("player-two")) {
     alert("PLAYER TWO IS A BEAST!!");
   } else if(
     $("#1").hasClass("player-two") &&
     $("#4").hasClass("player-two") &&
     $("#7").hasClass("player-two")) {
     alert("PLAYER TWO IS A BEAST!!");
   } else if(
     $("#2").hasClass("player-two") &&
     $("#5").hasClass("player-two") &&
     $("#8").hasClass("player-two")) {
     alert("PLAYER TWO IS A BEAST!!");
   } else if(
     $("#0").hasClass("player-two") &&
     $("#4").hasClass("player-two") &&
     $("#8").hasClass("player-two")) {
     alert("PLAYER TWO IS A BEAST!!");
   } else if(
     $("#2").hasClass("player-two") &&
     $("#4").hasClass("player-two") &&
     $("#6").hasClass("player-two")) {
     alert("PLAYER TWO IS A BEAST!!");
   }
}
