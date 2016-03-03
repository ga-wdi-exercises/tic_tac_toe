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

    $("#reset").on("click", function(){
        $(".box").each(function(){
            $(this).html("");
        });
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
            alert("you won in row 1!");
        }else if((boxArray.eq(3).html()=== boxArray.eq(4).html())&&
        (boxArray.eq(3).html()=== boxArray.eq(5).html())&&
        (boxArray.eq(4).html()=== boxArray.eq(5).html())){
            alert("you won in row 2!");
        }else if((boxArray.eq(6).html()=== boxArray.eq(7).html())&&
        (boxArray.eq(6).html()=== boxArray.eq(8).html())&&
        (boxArray.eq(7).html()=== boxArray.eq(8).html())){
            alert("you won in row 3!");
            //column winner
        }else if((boxArray.eq(0).html()=== boxArray.eq(3).html())&&
        (boxArray.eq(0).html()=== boxArray.eq(6).html())&&
        (boxArray.eq(3).html()=== boxArray.eq(6).html())){
            alert("you won in column 1!");
        }else if((boxArray.eq(1).html()=== boxArray.eq(4).html())&&
        (boxArray.eq(1).html()=== boxArray.eq(7).html())&&
        (boxArray.eq(4).html()=== boxArray.eq(7).html())){
            alert("you won in column 2!");
        }else if((boxArray.eq(2).html()=== boxArray.eq(5).html())&&
        (boxArray.eq(2).html()=== boxArray.eq(8).html())&&
        (boxArray.eq(5).html()=== boxArray.eq(8).html())){
            alert("you won in column 3!");
            //diagonal winner
        }else if((boxArray.eq(0).html()=== boxArray.eq(4).html())&&
        (boxArray.eq(0).html()=== boxArray.eq(8).html())&&
        (boxArray.eq(4).html()=== boxArray.eq(8).html())){
            alert("you won diagonally!");
        }else if((boxArray.eq(2).html()=== boxArray.eq(4).html())&&
        (boxArray.eq(2).html()=== boxArray.eq(6).html())&&
        (boxArray.eq(4).html()=== boxArray.eq(6).html())){
            alert("you won diagonally!");
        }
        //FIXME: how to add cat
        //FIXME: code only works if there is innerhtml set in the code. when I try to erase the 0-8 numbers in index.html then declareWinner thinks you won, because it becomes true for all conditions.
        //FIXME: the third condition in each ifelse statment can be erased. 

    }
}

//TODO: when done with js merge branch into anissa_solution
