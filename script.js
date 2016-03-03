$(document).ready(function() {

//builds board
for (var i = 0; i < 9; i++){
  appendBox();
  $(".box").eq(i).attr("id", i);
  $(".box").eq(i).on("click", function(){
    game.click++
    console.log(this.className)
    console.log(game.click)
    // this.classList.add("active" + xo())
    if (this.className === "box") {
      this.classList.add("active" + xo())
    } else {
      game.click--
      }
  })
}

function appendBox() {
  newDiv = document.createElement('div');
  newDiv.className = "box";
  $(".control").append(newDiv)
}

game = {
  click: 0,
  threes: {
    topRow: [$("#0"), $("#1"), $("#2")],
    middleRow: [$("#3"), $("#4"), $("#5")],
    bottomRow: [$("#6"), $("#7"), $("#8")],
    leftColumn: [$("#0"), $("#3"), $("#6")],
    middleColumn: [$("#1"), $("#4"), $("#7")],
    rightColumn: [$("#2"), $("#5"), $("#8")],
    diagonal1: [$("#0"), $("#4"), $("#8")],
    diagonal2: [$("#2"), $("#4"), $("#6")]
  }
}

function xo(){
  if (game.click % 2 === 0) {
    return "X"
  } else return "O"
}

$(".control").on("click", function() {
  threesCompany(game.threes.topRow),
  threesCompany(game.threes.middleRow),
  threesCompany(game.threes.bottomRow),
  threesCompany(game.threes.leftColumn),
  threesCompany(game.threes.middleColumn),
  threesCompany(game.threes.rightColumn),
  threesCompany(game.threes.diagonal1),
  threesCompany(game.threes.diagonal2)
})

//checks game.threes to see if all squares in that group have been selected.  If they have been clicked then their div name is "box activeO" or "box activeX". If all have been clicked, we send to checkWinner()
threesCompany = function(check) {
  if ((check[0].prop("class") && check[1].prop("class") && check[2].prop("class")) !== "box")  {
    return checkWinner(check)
  }
}

//if the winning click is the last pick, it is registering as a loser
checkWinner = function(three) {
    if ((three[0].css("background-image") === three[1].css("background-image")) && (three[0].css("background-image") === three[2].css("background-image"))) {
      alert("Winner")
    } else if ((game.click === 9) && ((three[0].css("background-image") !== three[1].css("background-image")) || (three[0].css("background-image") !== three[2].css("background-image")))) {
        alert("loser")
        clear()
    }
  }

clear = function() {
  for (var i = 0; i < 9; i++){
    $(".box").eq(i).prop("class", "box")
    game.click = 0
  }
}


// $.each(game.threes.topRow, function(){
//   threesCompany(game.threes)
// })

});
