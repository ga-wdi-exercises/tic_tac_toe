  $(document).ready(function(){

  var message= $(".messages");
  var turn = $(".turn");
  var table = $(".table");
  var cells = $(".cell");

  function eventListener() {
    cells.click(addLetter);
  }

  function eventListenerTwo() {
    cells.click(addLetterTwo);
  }

function addLetter(){
  console.log(this);
  $(this).text("X");
}

eventListener();


function addLetterTwo(){
  console.log(this);
  $(this).text("O");
}

eventListenerTwo();
  });



//
// function Cell(row, boxId) {
//   var row = row,
//   var boxid = boxId;
// }
