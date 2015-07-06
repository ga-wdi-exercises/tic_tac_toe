//INSTRUCTIONS

/* Minimum Requirements

A user should be able to click on different squares to make a move.
Every click will alternate between marking an X and O.
Upon marking of an individual cell, use JavaScript to add a class to each cell to display separate colors.
A cell should not be able to be replayed once marked.
Add a reset button that will clear the contents of the board.

JavaScript portion will be next:

Locate the element first to use it within your app. 
Think about using document.getElementById or document.getElementsByClassName to locate your target elements. 
Try this in your console to make sure your selection works.
After finding the elements, start writing logic to listen for click events on those elements.
You will also need a variable to keep track of moves. As this will be used to indicate whether or not to draw an X or an O.

*/

//. I will need to target elements in the html code to access with javascript
//	Use document.getElementbyID('square1') etc. will be helpful.
//	element.innerHTML = content to place x or o within the squares

//	Function to Place x's. I will comment out because I just experimented with the innerHTML
//	I perfected the function below to receive the argument and use conditional


//function placeCrosses(boxNumber) {
//placeCross = document.getElementById(boxNumber).innerHTML = "X";
//placeCross; 
//}

//	Function to place o's

//function placeCircles(boxNumber) {
//placeCircle = document.getElementById(boxNumber).innerHTML = "O";
//placeCircle; 
//}

//Now I need the program to place a circle or an x on click. Let's see what resources I can use to do that. . . 


/*var modifyText = function(){
	var box1 = document.getElementById("box1");
	box1.innerHTML = "X";
}

var placeCross = document.getElementById("box1");
placeCross.addEventListener("click", modifyText);
*/

//FUNCTION TO WRITE TEXT (X OR O) WITHIN ELEMENTS THAT RECEIVE A CLICK

//	The variable box targets the element with the given boxnumber based on which box is clicked below
//	The argument boxNumber is provided below based on which div is clicked
//	The conditional tests the counter for odd or even so it knows whether to place an X or an O


var counter = 1;

function fillBox(boxNumber){
	counter += 1;
	var box = document.getElementById(boxNumber);
	if (counter % 2 === 0) {
	box.innerHTML = "X";
	} else if (counter % 2 === 1) {
	box.innerHTML = "O";	
	}
}

//ADD EVENT LISTENERS TO EACH BOX TO CALL THE FUNCTION ABOVE THAT PLACES THE X OR O

//	The event listeners create a variable to capture the element in the html object to target
//	Then it tells the listener to trigger the function about on a mouse click
//	Unfortunately, at this point I don't know how to loop through the below functions

var placeCross = document.getElementById("box1");
placeCross.addEventListener("click", function(){
	fillBox("box1");
	changeElementColor1();
	turnOffEventListener(); 
});

var placeCross = document.getElementById("box2");
placeCross.addEventListener("click", function(){
	fillBox("box2");
	changeElementColor2();
});

var placeCross = document.getElementById("box3");
placeCross.addEventListener("click", function(){
	fillBox("box3");
	changeElementColor3();
});

var placeCross = document.getElementById("box4");
placeCross.addEventListener("click", function(){
	fillBox("box4");
	changeElementColor4();
});

var placeCross = document.getElementById("box5");
placeCross.addEventListener("click", function(){
	fillBox("box5");
	changeElementColor5();
});

var placeCross = document.getElementById("box6");
placeCross.addEventListener("click", function(){
	fillBox("box6");
	changeElementColor6();
});

var placeCross = document.getElementById("box7");
placeCross.addEventListener("click", function(){
	fillBox("box7");
	changeElementColor7();
});

var placeCross = document.getElementById("box8");
placeCross.addEventListener("click", function(){
	fillBox("box8")
	changeElementColor8();
});

var placeCross = document.getElementById("box9");
placeCross.addEventListener("click", function(){
	fillBox("box9")
	changeElementColor9();
});

// I need to add a loop somehow so that "box1" changes and the event listener works on all boxes
// I need to ask why this function doesn't work; For the present I'll keep the exceedingly unDRY code above

/*function wireCrosses(){
for (var i = 1; i < 10; i ++) {
	var placeCross = document.getElementById("box" + i);
	placeCross.addEventListener("click", function(){fillBox("box" + i)});
}
}
*/

//ALTERNATING BETWEEN PLACING X'S AND O'S (Eventually Updated Function above to do this)

//Now I can place x's everywhere. . . nice. Now I need to place some o's. I can use the same formula
//to place o's but I probably need to alternate between placing x's and o's. If I could store number of clicks
//on board, I could test for odd or even, then proceed down a place x path for odd or place o path for even.
//Looks like I can only do tha with Jquery. I just created a global counter variable up top. Then I added 1
// to the counter each time the fucntion is called. Then I used a conditional to test for odd and even. Then
//I had odd times place an "o" and even times place an "x". 


//WIRING RESET BUTTON TO RECIEVE A CLICK AND CLEAR THE BOARD

//trying to create the clear board button by selecting all the td elements that contain and changing their
//innerHTML to an empty string
//This is my terrible solution because it's not working when I document.getElementsByTag("td"). . . 

/*
function clearBoard(){
clear_box1 = document.getElementById("box1").innerHTML = "";
clear_box2 = document.getElementById("box2").innerHTML = "";
clear_box3 = document.getElementById("box3").innerHTML = "";
clear_box4 = document.getElementById("box4").innerHTML = "";
clear_box5 = document.getElementById("box5").innerHTML = "";
clear_box6 = document.getElementById("box6").innerHTML = "";
clear_box7 = document.getElementById("box7").innerHTML = "";
clear_box8 = document.getElementById("box8").innerHTML = "";
clear_box9 = document.getElementById("box9").innerHTML = "";
}

var clearBoardListener = document.getElementById("reset");
clearBoardListener.addEventListener("click", function(){clearBoard()})

*/

//MY BETTER SOLUTION TO CLEAR THE BOARD. . . 
	//Use a for loop to loop through and add a 1 to each box element
	//Same listeners as above calling the function clearBoard()
	//

function clearBoard(){
for (var i = 1; i < 10; i ++) {
document.getElementById("box" + i).innerHTML = "";
document.getElementById("box" + i).className = "gray"
}
}

var clearBoardListener = document.getElementById("reset");
clearBoardListener.addEventListener("click", function(){clearBoard()})

//

//CHANGE THE CLASS OF ELEMENT WHEN CLICKED
	//I will need to use .className += to change the color of the element when clicked
	//I will will create a funtion to perform this on the element when clicked
	//I will call the function with the event listener above
	//Let's try the terrible solution first just to work with something
	//I'll work on looping through this later

function changeElementColor1(){
	document.getElementById("box1").className += " blue";
}

function changeElementColor2(){
	document.getElementById("box2").className += " green";
}

function changeElementColor3(){
	document.getElementById("box3").className += " red";
}

function changeElementColor4(){
	document.getElementById("box4").className += " yellow";
}

function changeElementColor5(){
	document.getElementById("box5").className += " orange";
}

function changeElementColor6(){
	document.getElementById("box6").className += " violet";
}

function changeElementColor7(){
	document.getElementById("box7").className += " white";
}

function changeElementColor8(){
	document.getElementById("box8").className += " brown";
}

function changeElementColor9(){
	document.getElementById("box9").className += " indigo";
}

//FINALLY I NEED TO TURN OFF LISTENERS ONCE PRESSED!
	//I'm going to try to create a function with removeEventListener that fires when the event is clicked
	//I just really don't understand why this doesn't work
	//I'll have to ask about it

function turnOffEventListener(){
	document.getElementById("box1").removeEventListener("click", function(){
		fillBox("box1");
		changeElementColor1();
	});
}















