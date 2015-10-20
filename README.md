# Tic Tac Toe

**Objective:** Build a tic tac toe game in HTML and pure JavaScript.

Henceforth Tic Tac Toe may be referred to as "TTT" (or "Triple T").

## Minimum Requirements
* A user should be able to click on different squares, alternating their appearance between displaying an `X` and displaying an `O`.
* A user should be able to click a "Reset" button to clear the board.

## How to get started
1. Construct a `index.html` to be your starting point on this project. Add your necessary HTML tags, including `script` and `link` tags to link to your JavaScript and CSS respectively.
- Before you even start working with JavaScript, construct the gameboard. Don't worry about making it all interactive just yet: just create a 3x3 grid of squares somehow. Give everything an `id` and/or a `class` so you can easily select it later.
- Make one square clickable. When you click on it, it should change its appearance to something else. Clicking on it again changes it back.
- Make every square clickable in the same way. Don't worry about `X` and `O` and taking turns yet; just get some basic interactivity going.
- Create a "reset" button that changes all of the squares to the same thing.
- Now start adding in some rules: a player can't click on a square that has already been clicked until the "Reset" button is pressed.

## Bonus
* Display a message to indicate which turn is about to be played.
* After the necessary moves have been played, stop game and alert the winner if one player ends up winning with three in a row.
  * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

## Super-Ultra-Mega Bonus
* We once had a student implement an Artifical Intelligence (AI) opponent. If you really need a challenge, write some code that will play a game of Tic Tac Toe against you. (Hint: look into the minimax algorithm).
