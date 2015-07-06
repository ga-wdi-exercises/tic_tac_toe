// Testing on one cell clicking to change to
// X and adding another class to cell

var test = document.getElementById('c3')

function tableReturn (){

    test.innerHTML = 'X'
    test.className += ' blue'

}

test.addEventListener("click", tableReturn, false);

var clear = document.getElementsByClassName ('gameboard')
// Attempting to use a for loop to iterate over elements of the 'gameboard'
// array in order to reset, by passing i in for each of the classes c1-c9.
// But it appears that not all of the table elements count as individual pieces of the array

var finish = document.querySelector('button')

function resetBoard () {
  for (i = 0; i < clear; i ++){
    document.querySelector().innerHTML = '';
  }
}

finish.addEventListener("click", resetBoard, false);
