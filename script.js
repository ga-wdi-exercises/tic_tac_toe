$(document).ready(function(){
    var mainBoard = new Board($("#board"));
});

function Board(element) {
    //this.element == mainBoard which is my entire container div
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

    this.elements.box1.on("click", function(){
        console.log("You clicked me!");
    });



    // for(var i=0; i<this.elements.length;i++){
    //
    //     console.log(i);
    //     console.log(this.elements[i]);
    //
    //     (this.elements[i]).on("click", function(){
    //         console.log("You clicked me!");
    //     });
    // }

    //user for later for switching between x's and o's
    function changeLetter(){
        if(this.numOfMoves % 2 === 0){
            //enter an X
        }else{
            //enter an O
        }
    }

}
