$(document).ready(function(){
    var mainBoard = new Board($("#board"));

});

function Board(element) {
    //this.element == mainBoard which is my entire container div
    var self = this;
    this.element = element;
    this.numOfMoves = 0;
    this.elements = {
        //this is saying find .box# in the mainBoard
        box1: this.element.find(".box1"),
        box2: this.element.find(".box2"),
        box3: this.element.find(".box3"),
        box4: this.element.find(".box4"),
        box5: this.element.find(".box5"),
        box6: this.element.find(".box6"),
        box7: this.element.find(".box7"),
        box8: this.element.find(".box8"),
        box9: this.element.find(".box9")
    };


    $(".box").on("click", function(){
        //$(this) is referring to .box ie whatever the listener is listening for.
        console.log($(this));
        addXorO();
        changeLetter($(this));
    });


    function addXorO() {
        console.log("You clicked me!");
        //add 1 to moves.
        self.numOfMoves++;
    }

    //switching between x's and o's
    function changeLetter(square){
        if(self.numOfMoves % 2 === 0){
            //get inner html and add an O
            square.html("O");
        }else{
            //enter an X
            square.html("X");
        }
    }
}

//TODO: when done with js merge branch into anissa_solution
