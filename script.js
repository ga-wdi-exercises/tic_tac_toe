//create 3 by 3 board
$(document).ready(function(){
  // $(function change_cell() {
      $("td").on("click", function () {
        var cell_id = $(this).attr('id');
        console.log(cell_id);
        console.log($(this));
        var table = $(this).closest('table');
        var currentValue = $(this).html();
        alert(currentValue);

// allow to input X or O
      var changeValue = prompt("Enter X or O). (Current " + currentValue + ")");
        $(this).html(changeValue);
        if (changeValue !== null){
          $table.find('[id="' + cell_id + '"]').text(changeValue);
        }
  });
});

grid = [
    [ "" ,"", "" ]
    [ "", "", "" ]
    [ "", "", "" ]
    ];

var row 1 = grid[0]
var row 2 = grid[1]
var row 3 = grid[2]

console.log("row1", row1);
console.log("row2", row2);
console.log("row3", row3);

var winning_letter = "none";

//compare first row
if ((row1[0]) == row1[1] && (row1[1] == row1[2]) && (row1[0] == row1[2])) {
    winning_letter = row1[0];
}

//compare second row
if ((row2[0]) == row2[1] && (row2[1] == row2[2]) && (row2[0] == row2[2])){
    winning_letter = row2[0];
}

//compare third row
if ((row1[0]) == row1[1] && (row1[1] == row1[2]) && (row1[0] == row1[2])){
    winning_letter = row3[0];
}

//compare diagonal row
if ((row1[0]) == row2[1] && (row2[1] == row3[2]) && (row1[0] == row3[2])){
    winning_letter = row1[0];
}

//compare diagonal 2 row
if ((row1[0]) == row2[1] && (row2[1] == row3[2]) && (row1[0] == row3[2])){
    winning_letter = row1[0];
}


  //

  // if there are three X in a row alert player X wins
  // if there are three O in a row alert player Y wins
  // 9 spaces in grid(rows & cols)
  // Check for winner
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
