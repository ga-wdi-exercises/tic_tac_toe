$(document).ready(function() {
    function Cell(el) {
        this.move = null;
        this.el = el;
        this.clicked = false;
    }
    Cell.prototype.handleCellClick = function(rowNum, colNum, board) {
        if (!board.table[rowNum][colNum].clicked && !board.gameOver) {
            board.table[rowNum][colNum].clicked = true;
            board.table[rowNum][colNum].move = board.turn;
            this.el.html(board.turn);
            var turn = "O";
            if (board.turn === turn) { turn = "X"; }
            board.turn = turn;
            board.totalMoves++;
            if (board.totalMoves > 4) {
                var winner = board.checkForWinner(board);
                if (winner) {
                    console.log(winner);
                    board.gameOver = true;
                }
            }
        }
    };
    function Board() {
        this.table = [];
        this.turn = "X";
        this.totalMoves = 0;
        this.gameOver = false;
    }
    Board.prototype.horizontalWin = function(i, self) {
        var move = board.table[i][0].move;
        if (move === board.table[i][1].move &&
                move === board.table[i][2].move) {
            return move;
        }
        return null;
    };
    Board.prototype.verticalWin = function(self) {
        for (var i = 0; i < self.table.length; i++) {
            var move = self.table[0][i].move;
            if (move === self.table[1][i].move &&
                    move === self.table[2][i].move) {
                return move;
            }
        }
        return null;
    };
    Board.prototype.diagonalWin = function(i, self) {
        var move = self.table[0][i].move;
        if (move === self.table[1][1].move &&
                move === self.table[2][2-i].move) {
            return move;
        }
        return null;
    };
    Board.prototype.checkForWinner = function(self) {
        // Pass through the board to find a winner.
        // This solution doesn't scale for larger square grids
        // but shouldn't need much modification to do so.
        var winner, i;
        winner = self.verticalWin(self);
        if (winner) { return winner; }
        for (i = 0; i < self.table.length; i++) {
            winner = self.horizontalWin(i, self);
            if (winner) {
                return winner;
            } else if (i % 2 === 0) {
                winner = self.diagonalWin(i, self);
                if (winner) { return winner; }
            }
        }
        return null;
    };
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
