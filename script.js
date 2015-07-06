// Testing on one cell clicking to change to
// X and adding another class to cell

var example = document.getElementById('c3')

function exampleBox () {
    if (example.innerHTML =="") {
    example.innerHTML = 'X';
    example.className += ' blue'
    example.style.color = "blue";
  }

    else if (example.innerHTML == 'X') {
      example.innerHTML = 'O';
      example.className += ' red'
      example.style.color = "red";
    }
}
example.addEventListener("click", exampleBox, false);

var cellSelect = document.getElementsByClassName('cell');

function clickChange () {

    for (i = 0; i < cellSelect.length; i++) {
       if (cellSelect[i].innerHTML == " "){
         cellSelect [i].innerHTML == " X"
       }
    }
}

addEventListener("click", clickChange, false);

var allCells = document.getElementsByClassName('cell');



var clear = document.getElementsByClassName ('gameboard')
// Attempting to use a for loop to iterate over elements of the 'gameboard'
// array in order to reset, by passing i in for each of the classes c1-c9.
// But it appears that not all of the table elements count as individual pieces of the array

var finish = document.getElementsByClassName('reset')

function resetBoard () {
  for (i = 0; i < allCells.length; i ++){
    allCells[i].innerHTML = '';
  }
}
