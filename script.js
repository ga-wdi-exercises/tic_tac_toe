$(document).ready(function() {
  var game = new Game()
})

function Game() {
  var self = this;
  this.click = 0
  this.squares = $(".square")
  this.squares.html("")
  this.squares.on("click", function(){
    console.log("hello")
    console.log(self.click)
      self.click++;
    if (self.click % 2 !== 0) {
      $(this).css("backgroundColor", "blue")
    }
    else if (self.click % 2 == 0) {
      $(this).css("backgroundColor", "red")
    }
  })

};
