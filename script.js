$(".button").click(function(){
// everytime a player clicks on a <td> an X or an O shows in the cell.
console.log("I was clicked!");
  // How can tell which cell was clicked on?
  var symbol = ["X","O"];
  var id = [1, 2];
  var player = function (id, symbol){
    this.symbol = symbol;
    this.id = id;
  }



  // How can we determine whats in that cell?

  // if the value of the cell is not what we want?
      // change it to the opposite

 })

 // when one player completes his turn as X the next players turn becomes O.
