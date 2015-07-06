var move = 'X';

function switchMove(){
	if (move==='X'){
		move ='O';
	} else {
		move = 'X';
	}
}

function mark(event){
	var box = event.target;
	if(box.innerHTML === ''){
		box.innerHTML = move;
		switchMove();
	}
}

function clearAllBoxes(){
	var boxes = document.getElementsByClassName('box');
	for(var i=0; i<boxes.length; i++){
		boxes[i].innerHTML= '';
	}
	move = 'X';
}



var boxes = document.getElementsByClassName('box');

for(var i=0; i<boxes.length; i++){
	boxes[i].onclick= mark;
}

document.getElementById('resetButton').onclick=clearAllBoxes;
