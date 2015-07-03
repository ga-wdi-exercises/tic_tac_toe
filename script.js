var littleBoxes = document.getElementsByClassName('box');

for(var i=0;i<littleBoxes.length;i++){
    littleBoxes[i].addEventListener('click', addPlayerMark);
}

var turnCounter = 1;

function addPlayerMark(event) {

    if (event.target.innerHTML.length === 0){
        if (turnCounter % 2 === 0) {
            // OMoves.push(parseInt(event.target.getAttribute("data-num")));
            event.target.innerHTML = "X";
            event.target.setAttribute("class","X");
            event.target.style.background = "red";
        } else {
            event.target.innerHTML = "O";
            event.target.setAttribute("class","O");
            event.target.style.background = "blue";
        }
    // turnText.innerHTML = "It is X's turn";
    turnCounter++;

    // checkForWin(OMoves, "O");
} else {
    return confirm("Aww, already clicked! Try another square.");
}
// if box is clicked, check to see if there is already something in the box

// if box is open clicked, check to see which letter (x or o) was placed last
// console.log(turnCounter);

};


//
//     // if x was placed last, add o
//     // else if o was placed last, place x
//       /* set the class name on the new div to X-marker or O-marker, depending on the current player */
//     }
//
//

//
// fillSquareWithMarker(square, currentPlayer);
// updateBoard(square.id, currentPlayer);
// checkForWinner();
// switchPlayers();
