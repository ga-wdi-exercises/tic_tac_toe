$(document).ready(function(){
    var mainBoard = new Board($("#board"));

});

function Board(element) {
    //this.element == mainBoard which is my entire container div
    var self = this;
    this.element = element;
    this.numOfMoves = 0;


    $(".box").on("click", function(){
        //$(this) is referring to .box ie whatever the listener is listening for.
        // console.log($(this));
        countMoves();
        addXorO($(this));
    });


    function countMoves() {
        console.log("You clicked me!");
        //add 1 to moves.
        self.numOfMoves++;
    }

    //switching between x's and o's
    function addXorO(square){
        if(self.numOfMoves % 2 === 0){
            //get inner html and add an O
            square.html("O");
        }else{
            //enter an X
            square.html("X");
        }
        declareWinner();
    }

    function declareWinner() {
        var boxArray = $(".box");
        //row winner
        if((boxArray.eq(0).html()=== boxArray.eq(1).html())&&
        (boxArray.eq(0).html()=== boxArray.eq(2).html())&&
        (boxArray.eq(1).html()=== boxArray.eq(2).html())){
            console.log("you won in row 1!");
        }else if((boxArray.eq(3).html()=== boxArray.eq(4).html())&&
        (boxArray.eq(3).html()=== boxArray.eq(5).html())&&
        (boxArray.eq(4).html()=== boxArray.eq(5).html())){
            console.log("you won in row 2!");
        }else if((boxArray.eq(6).html()=== boxArray.eq(7).html())&&
        (boxArray.eq(6).html()=== boxArray.eq(8).html())&&
        (boxArray.eq(7).html()=== boxArray.eq(8).html())){
            console.log("you won in row 3!");
            //column winner
        }else if((boxArray.eq(0).html()=== boxArray.eq(3).html())&&
        (boxArray.eq(0).html()=== boxArray.eq(6).html())&&
        (boxArray.eq(3).html()=== boxArray.eq(6).html())){
            console.log("you won in column 1!");
        }else if((boxArray.eq(1).html()=== boxArray.eq(4).html())&&
        (boxArray.eq(1).html()=== boxArray.eq(7).html())&&
        (boxArray.eq(4).html()=== boxArray.eq(7).html())){
            console.log("you won in column 2!");
        }else if((boxArray.eq(2).html()=== boxArray.eq(5).html())&&
        (boxArray.eq(2).html()=== boxArray.eq(8).html())&&
        (boxArray.eq(5).html()=== boxArray.eq(8).html())){
            console.log("you won in column 3!");
            //diagonal winner
        }else if((boxArray.eq(0).html()=== boxArray.eq(4).html())&&
        (boxArray.eq(0).html()=== boxArray.eq(8).html())&&
        (boxArray.eq(4).html()=== boxArray.eq(8).html())){
            console.log("you won diagonally!");
        }else if((boxArray.eq(2).html()=== boxArray.eq(4).html())&&
        (boxArray.eq(2).html()=== boxArray.eq(6).html())&&
        (boxArray.eq(4).html()=== boxArray.eq(6).html())){
            console.log("you won diagonally!");
        }

        //diagnol winner
        //cat: no winner
    }
    // declareWinner();
}

//TODO: when done with js merge branch into anissa_solution
