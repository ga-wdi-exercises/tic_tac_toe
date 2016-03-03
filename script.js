//construct a 3x3 board, use for loop
var rows = 3;
var columns = 3;
var $row = $("<div />", {
    class: 'row'
});
var $cell = $("<div />", {
    class: 'cell'
});

$(document).ready(function () {
    //add columns to row
    for (var i = 0; i < columns; i++) {
        $row.append($cell.clone());
    }
    //clone the temp row object with the columns to the board
    for (var i = 0; i < rows; i++) {
        $("#board").append($row.clone());
    }
});
