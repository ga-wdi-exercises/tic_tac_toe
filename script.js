
$(document).ready(function(){
  // $(function change_cell() {
      $("td").on("click", function () {
        var cell_id = $(this).attr('id');
        console.log(cell_id);
        console.log($(this));
        var table = $(this).closest('table');
        var currentValue = $(this).html();
        alert(currentValue);

      var changeValue = prompt("Enter X or O). (Current " + currentValue + ")");
        $(this).html(changeValue);
        if (changeValue !== null){
          $table.find('[id="' + cell_id + '"]').text(changeValue);
        }
  });
});

//create 3 by 3 board
  //
// allow to input X or O
  // if there are three X in a row alert player X wins
  // if there are three O in a row alert player Y wins
  // 9 spaces
    //array for row 1, 2, 3 and column 1, 2, 3
      //row wins
        // if r1c1 = r1c2 = r1c3, alert X or O wins
        // if r2c1 = r2c2 = r2c3, alert X or O wins
        // if r3c1 = r3c2 = r3c3, alert X or O wins

      //column wins
        // if r1c1 = r2c1 = r3c1, alert X or O wins
        // if r1c2 = r2c2 = r3c2, alert X or O wins
        // if r1c3 = r2c3 = r3c3, alert X or O wins

      //diagonal wins
        //if r1c1 = r2c2 = r3c3, alert X or O wins
        //if r1c3 = r2c2 = r3c1


//two players play on grid
//player X
  //put letter X in empty cell
//player O
  // put letter O in empty cell
