Quick user stories

When the page loads, game board should be visible (3x3)
First click should initialize the game and mark an X (send red color to box)
  additional clicks on the same box should not change content
Next click sends an O to the grid (blue color)
  this continues until there are three in a row
    OR when there are no more boxes in the grid
Reset at any time to begin anew


Page-load: create divs
clicks
Mark X/O: replace html... html()
red/blue sent: addClass()
reset: remove classes
alternate clicks: use counter?


Pseudocode Min Reqs.
When the page loads, 3x3 grid should be created using divs
  grid is empty and all same color
First click initializes the game and sends an X as well as a red color to the boxes
  add/replace class to change color and inner html of the div
  DIV SHOULD NOT BE CLICKABLE AFTER THAT - CHANGE CLASS ATTR
the counter keeps pace of the game, even number clicks are Xs, odd are O
  if (counter%2===0)
