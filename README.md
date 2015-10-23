# Tic Tac Toe

**Objective:** Build a tic tac toe game in HTML and pure JavaScript.

Henceforth Tic Tac Toe may be referred to as "TTT" (or "Triple T").

## Workflow Requirements
- By Monday at 9:00am
  - Fork this repository
  - To your fork, push a "readme" file that contains [5 user stories](https://github.com/ga-dc/curriculum/tree/master/02-intermediate-front-end/process-stories-wireframes)
  - Make a pull request, the same way you would [regularly submit homework](https://github.com/ga-dc/wdi7/blob/master/homework/submission-process.md)
- By Wendesday at 12:00pm
  - To your fork, push all the code you wrote
  - Make a pull request

## Technical Requirements
* A user should be able to click on different squares, alternating their appearance between displaying an `X` and displaying an `O`.
* A user should be able to click a "Reset" button to clear the board.

## Presentations
These will be "science fair-style" on Wednesday afternoon. This means that part of the class will show off their projects on tables/crates while the other students walk around, observe, and ask questions.

## How to get started
1. Construct a `index.html` to be your starting point on this project. Add your necessary HTML tags, including `script` and `link` tags, to link to your JavaScript and CSS respectively.
- Before you even start working with JavaScript, construct the gameboard using HTML. Don't worry about making it all interactive just yet: just create a 3x3 grid of squares somehow. Give everything an `id` and/or a `class` so you can easily select it later.
- Make one square clickable. When you click on it, it should change its appearance to something else. Clicking on it again should change it back.
- Make every square clickable in the same way. Don't worry about `X` and `O` and taking turns yet; just get some basic interactivity going.
- Create a "reset" button that changes all of the squares to the same thing.
- Now start adding in some rules: a player can't click on a square that has already been clicked until the "Reset" button is pressed.

## Bonus
* Display a message to indicate which turn is about to be played.
* After the necessary moves have been played, stop game and alert the winner if one player ends up winning with three in a row.
  * Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

## Super-Ultra-Mega Bonus
* We once had a student implement an Artifical Intelligence (AI) opponent. If you really need a challenge, write some code that will play a game of Tic Tac Toe against you. (Hint: look into the minimax algorithm).
