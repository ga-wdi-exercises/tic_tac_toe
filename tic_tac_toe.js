$(document).ready(function() {
    function Cell(el) {
        this.move = null;
        this.el = el;
        this.clicked = false;
    }
    Cell.prototype.handleCellClick = function(rowNum, colNum, board) {
        if (!board.table[rowNum][colNum].clicked) {
            board.table[rowNum][colNum].clicked = true;
            board.table[rowNum][colNum].move = board.turn;
            this.el.html(board.turn);
            var turn = "O";
            if (board.turn === turn) { turn = "X"; }
            board.turn = turn;
        }
    };
    function Board() {
        this.table = [];
        this.turn = "X";
    }
    var board = new Board();
    $("#board tr").each(function() {
        var row = [];
        $(this).find("td").each(function() {
            row.push(new Cell($(this)));
        });
        board.table.push(row);
    });
    board.table.forEach(function(row) {
        row.forEach(function(cell) {
            cell.el.on("click", function() {
                var rowNum = $(this).parent().attr("id").split("").slice(3)[0];
                var colNum = $(this).attr("class").split("").slice(3)[0];
                cell.handleCellClick(rowNum, colNum, board);
            });
        });
    });
});
