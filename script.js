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
    // this.numOfBoxes = Object.keys(this.elements).length;


    this.elements.box1.on("click", addXorO);
    this.elements.box2.on("click", addXorO);
    // var allboxes = this.elements;
    // console.log(allboxes);
    // for(var boxes in allboxes){
    //     boxes.on("click", youClickedMe);
    // }


    function addXorO() {
        console.log("You clicked me!");
        self.numOfMoves++;
        console.log(self.numOfMoves);
        changeLetter();
    }

    //switching between x's and o's
    function changeLetter(){
        if(self.numOfMoves % 2 === 0){
            //get inner html
            console.log(self.elements.box1.text("O"));
            //change inner html
        }else{
            //enter an X
        }
    }
}

//TODO: when done with js merge branch into anissa_solution
