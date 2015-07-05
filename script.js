var playerSqSelect;

function playerSelected(clickedId) {
    console.log(clickedId);
    playerSqSelect = clickedId;
    document.getElementById(playerSqSelect).innerHTML = "O";
    document.getElementById(playerSqSelect).style.color = "cyan";
    return playerSqSelect;
}



