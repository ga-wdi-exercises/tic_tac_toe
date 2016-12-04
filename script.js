$(document).ready(function() {
  happy = new Game()
})

function Game() {
  var self = this
  this.click = 0
  this.squares = $(".square")
  this.squares.html("")
  this.reset = $(".resetButton")

  this.squares.on("click", function(){
    console.log(self.click)
    self.click++;
    if (self.click % 2 !== 0) {
      $(this).css("backgroundColor", "lemonchiffon")
      $(this).html("X")
      self.checkVictory('X')
    }
    else if (self.click % 2 == 0) {
      $(this).css("backgroundColor", "lightblue")
      $(this).html("O")
      self.checkVictory('O')
    }
    // $(this).off()
  })

  this.reset.on("click", function() {
    $(".square").html("")
    $(".square").css("backgroundColor", "white")
    // oneMoreTime = new Game()
  })


};
Game.prototype.checkVictory = function(player) {
  //top row check
  if ($('#board').find('#1').html() !== ''){
    if ($('#board').find('#1').html() == $('#board').find('#2').html()) {
      if ($('#board').find('#1').html() == $('#3').html()) {
        alert('Game over! ' + player + ' is the winner!');
      }
    }
    //left column check
    if ($('#board').find('#1').html() == $('#board').find('#4').html()) {
      if ($('#board').find('#1').html() == $('#7').html()) {
        alert('Game over! ' + player + ' is the winner!');
      }
    }
    //left diagonal check
    if ($('#board').find('#1').html() == $('#board').find('#5').html()) {
      if ($('#board').find('#1').html() == $('#9').html()) {
        alert('Game over! ' + player + ' is the winner!');
      }
    }
  }
  //middle column check
  if ($('#board').find('#2').html() !== ''){
    if ($('#board').find('#2').html() == $('#board').find('#5').html()) {
      if ($('#board').find('#2').html() == $('#8').html()) {
        alert('Game over! ' + player + ' is the winner!');
      }
    }
  }
  //right column check
  if ($('#board').find('#3').html() !== ''){
    if ($('#board').find('#3').html() == $('#board').find('#6').html()) {
      if ($('#board').find('#3').html() == $('#9').html()) {
        alert('Game over! ' + player + ' is the winner!');
      }
    }
    //right diag check
    if ($('#board').find('#3').html() == $('#board').find('#5').html()) {
      if ($('#board').find('#3').html() == $('#7').html()) {
        alert('Game over! ' + player + ' is the winner!');
      }
    }
  }
  //middle row check
  if ($('#board').find('#4').html() !== ''){
    if ($('#board').find('#4').html() == $('#board').find('#5').html()) {
      if ($('#board').find('#4').html() == $('#6').html()) {
        alert('Game over! ' + player + ' is the winner!');
      }
    }
  }
  //bottom row check
  if ($('#board').find('#7').html() !== ''){
    if ($('#board').find('#7').html() == $('#board').find('#8').html()) {
      if ($('#board').find('#7').html() == $('#9').html()) {
        alert('Game over! ' + player + ' is the winner!');
      }
    }
  }

}
