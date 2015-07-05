var playerSqSelect = "";
var playerChoice = "";
var takenSquares = [];
var clickedIdSelected = "";
var lastMove = "";

function squareStatus() {

    if (playerSqSelect !== "") {
        return false;
    } else return true;

}

function squareAvailibility() {
    if(takenSquares.indexOf(clickedIdSelected) > -1) {
            console.log(takenSquares);
            alert("That square is already taken!");
        }
        else {
            XorO();
        }
}

function XorO(playerChoice) {
    if (lastMove == "" || lastMove == "X"){
        document.getElementById(clickedIdSelected).innerHTML = "O";
        document.getElementById(clickedIdSelected).style.color = "cyan";
        document.getElementById("button").value = "Player X's Move";
        lastMove = "O";
    } else {
        document.getElementById(clickedIdSelected).innerHTML = "X";
        document.getElementById(clickedIdSelected).style.color = "purple";
        document.getElementById("button").value = "Player O's Move";
        lastMove ="X";
    }
}

function playerSelected(clickedId) {
    var squareStatusResult = squareStatus();

    if (squareStatus() == true){
        clickedIdSelected = clickedId;
        console.log(takenSquares);
        squareAvailibility();
        takenSquares.push(clickedIdSelected);
    }

}

