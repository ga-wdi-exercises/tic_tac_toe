
// ======= ======= ======= init ======= ======= ======= 
function init() {
	console.log('init');

	// ======= the winners =======
	var winningArrays = [
		[1,1,1,0,0,0,0,0,0],
		[0,0,0,1,1,1,0,0,0],
		[0,0,0,0,0,0,1,1,1],
		[1,0,0,1,0,0,1,0,0],
		[0,1,0,0,1,0,0,1,0],
		[0,0,1,0,0,1,0,0,1],
		[1,0,0,0,1,0,0,0,1],
		[0,0,1,0,1,0,1,0,0]
	]

	// ======= gameBoard =======
	var boxScores, whichBox, classList, playerXname, playerOname, counter, winner, winnerIcon;
	var binaryArray, nextWinArray, checkArray, nextBoxScore;
	var rowScores = [];
	var boxCount = $("#gameBoard > div").length;
	var gameBoard = document.getElementById("gameBoard");
	var startGameBtn = document.getElementById("startGame");

	// ======= players =======
	var nowPlayingIcon = 'X';
	var nowPlayingName = '';
	var nowPlayingDiv = document.getElementById("nowPlaying");
	nowPlayingDiv.innerHTML = " ";

	// ======= activate eventListener =======
	startGameBtn.addEventListener('click',startGame,false);


	// ======= ======= ======= startGame ======= ======= =======
	function startGame(e) {
		console.log('startGame');

		nowPlayingDiv.innerHTML = "";
		boxScores = [];
		playCount = 0;
		nowPlayingIcon = "X";
		playerXname = document.getElementById("playerXname").value;
		playerOname = document.getElementById("playerOname").value;
		nowPlayingDiv.className = "players playerX"

		// ======= activate player XO eventListeners =======
		for (var i = 0; i < boxCount; i++) {
			nextDiv = gameBoard.children[i];
			nextDiv.innerHTML = '';
			boxScores.push(gameBoard.children[i].id);
			nextDiv.addEventListener('click',placeXO,false);
		}
		setTimeout(function(){ nowPlayingDiv.innerHTML = "now playing: " + playerXname; }, 1000);
	}


	// ======= ======= ======= place X or O ======= ======= =======
	function placeXO(e) {
		console.log('\nplaceXO');

		playCount++;
		winnerIcon = false;
		selectIndex = boxScores.indexOf(e.target.id);

		if (selectIndex > -1) {
			e.target.innerHTML = nowPlayingIcon;
			currentClassList = e.target.className;
			e.target.className = currentClassList + " player" + nowPlayingIcon;
			boxScores[selectIndex] = nowPlayingIcon;

			winnerIcon = checkWin(nowPlayingIcon);
			if (!winnerIcon) {
				setTimeout(updateBoard(), 500);
				if (playCount > 8) {
					nowPlayingDiv.innerHTML = "It's a draw. Wanna play again?";
				}
			}

		} else {
			nowPlayingDiv.innerHTML = "Oops! Try another box!";
		}

		// ======= updateBoard =======
		function updateBoard() {
			console.log('updateBoard');

			if (nowPlayingIcon == 'X') {
				console.log('  playerX');
				nowPlayingIcon = 'O';
				nowPlayingName = playerOname;
				nowPlayingDiv.className = "players playerO"
			} else {
				console.log('  playerO');
				nowPlayingIcon = 'X';
				nowPlayingName = playerXname;
				nowPlayingDiv.className = "players playerX"
			}
			nowPlayingDiv.innerHTML = "now playing: " + nowPlayingName;
		}

	}


	// ======= ======= ======= checkWin ======= ======= =======
	function checkWin(whichPlayerIcon) {
		console.log('checkWin');

		binaryArray = [0,0,0,0,0,0,0,0,0];

		// ======= digitize boxScores =======
		for (var j = 0; j < boxScores.length; j++) {
			nextBoxScore = boxScores[j];
			if (nextBoxScore == whichPlayerIcon) {
				binaryArray[j] = 1;
			}
		}

		for (var i = 0; i < winningArrays.length; i++) {
			nextWinArray = winningArrays[i];
			checkArray = [0,0,0,0,0,0,0,0,0];

			for (var j = 0; j < checkArray.length; j++) {
				checkArray[j] = nextWinArray[j] * binaryArray[j];
			}

			var checkSum = 0;
			for (var k = 0; k < checkArray.length; k++) {
				checkSum = checkSum + checkArray[k];
			}

			// ======= checkArray sums to 3 =======
			if (checkSum == 3) {
				console.log('WE HAVE A WINNER!');
				nowPlayingDiv.innerHTML = "WE HAVE A WINNER!";

				// ======= deactivate player XO eventListeners =======
				for (var i = 0; i < boxCount; i++) {
					nextDiv = gameBoard.children[i];
					nextDiv.removeEventListener('click',placeXO,false);
				}
				return whichPlayerIcon;
				break;
			}
		}
	}
}


// ======= ======= ======= ARCHIVE ======= ======= =======
// ======= ======= ======= ARCHIVE ======= ======= =======
// ======= ======= ======= ARCHIVE ======= ======= =======


		// startRow = 0;
		// startCol = 0;

		// // ======= check rows =======
		// diagRow = 0;
		// for (var i = 0; i < boxScores.length; i++) {

		// 	// ======= check cols =======
		// 	testScore = boxScores[i][0];
		// 	for (var j = 1; j < 3; j++) {
		// 		nextScore = boxScores[i][j];
		// 		console.log('nextScore ' + nextScore);
		// 		if (nextScore != testScore) {
		// 			break;
		// 		} else if (j == 2) {
		// 			winner = testScore;
		// 		}
		// 	}

		// 	// ======= check diags =======
		// 	diagRow++;
		// 	nextScore = boxScores[i][diagRow];
		// 	if (nextScore != testScore) {
		// 		break;
		// 	} else if (diagRow == 2) {
		// 		winner = testScore;
		// 	}
		// }


