var clicks = 0;

function paint() {
    $(".square").on("click", function (){
      clicks++;
      if(clicks % 2 == 0) {
        $(this).addClass("player-two");
        $("#turn").html("First Player Turn")
      } else {
        $(this).addClass("player-one");
        $("#turn").html("Second Player Turn")
      }
      $(this).off()
    });
  }

function reset() {
    clicks = 0;
    $(".square").css("backgroundColor", "white");
    $("#turn").html("First Player Turn");
    paint();
}

paint()

$("button").on("click", reset);

var board = {
  box1: 1, box2: 2, box3: 4,
  box4: 8, box5: 16, box6: 32,
  box7: 64, box8: 128, box9: 256
}
