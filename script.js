$(document).ready(function(){
    var mainBoard = new Board($("#board"));
    console.log(mainBoard.elements.box1.html());
    console.log(mainBoard.elements.box1.html());
});

function Board(element) {
    //this.element == mainBoard which is my entire container div
    this.element = element;
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
}
