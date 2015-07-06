// has box been clicked?
// is it an x or an o?
// is there three in a row?
// reset game
// ids can't be numbers?
var blah = document.getElementsByClassName ("row");//for adding eventlistener
//for calculating who's won
var board = [null,null,null,
             null,null,null,
             null,null,null];
var xArray = [];
var yArray = [];
var turn = "X";//who's turn is it?

//loop method
function firstClick() {
for (i=0;i<board.length;i++) {
  var myId = parseInt(this.id);
  switch (myId) {
    case i:
      //console.log(i);
      board[i]=i;
      if (turn === "X") {
        this.firstChild.innerHTML = "X";
        turn = "O";
        xArray.push(myId);
        determineXwinner();
      }else{
        this.firstChild.innerHTML = "O";
        //determineYwinner();
        turn = "X";
      }
      this.removeEventListener("click", firstClick);
      break;
    default:
  }
  }
}

function determineXwinner(){
  var arraySum = xArray.reduce(function(prev, cur) {return prev + cur;});

  console.log(xArray.reduce(function(prev, cur) {
    return prev + cur;
  }));

  // if (arraySum === 3 || arraySum === 9 || arraySum === 12 || arraySum === 15){
  //   alert ('X wins!');
  // }
}

//click behavior
for (i=0;i<blah.length;i++) {
  blah[i].addEventListener("click", firstClick);
}

//brute force method
//function firstClick() {
  // switch (this.id) {
  //   case "0":
  //     board[0]=this.id;
  //     if (turn === "X") {
  //       this.firstChild.innerHTML = "X";
  //     }else{
  //       this.firstChild.innerHTML = "O";
  //     }
  //     this.removeEventListener("click", firstClick);
  //     turn = "O";
  //     break;
  //   case "1":
  //     board[1]=this.id;
  //     if (turn === "X") {
  //       this.firstChild.innerHTML = "X";
  //     }else{
  //       this.firstChild.innerHTML = "O";
  //     }
  //     this.removeEventListener("click", firstClick);
  //     turn = "O";
  //     break;
  //   case "2":
  //     board[2]=this.id;
  //     break;
  //   case "3":
  //     board[3]=this.id;
  //     break;
  //   case "4":
  //     board[4]=this.id;
  //     break;
  //   case "5":
  //     board[5]=this.id;
  //     break;
  //   case "6":
  //     board[6]=this.id;
  //     break;
  //   case "7":
  //     board[7]=this.id;
  //     break;
  //   case "8":
  //     board[8]=this.id;
  //     break;
  //   default:
  //}
//}
