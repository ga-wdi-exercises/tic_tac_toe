$(".square").css("height", "100px");
$(".square").css("width", "100px");
$(".square").css("border", "solid black 2px");

$(".gameboard").css("display", "inline-block");
$(".gameboard").css("width", "350px")

$(".column").css("float", "left");

var squaresChanged = 0;
var lastSquare;


$(".square").on("click", function() {
	if ($(this).html() != "<h1>X</h1>" && $(this).html() != "<h1>O</h1>")  {
		if (squaresChanged % 2 === 1) {
			$(this).html("<h1>O</h1>");
			squaresChanged ++;
		} else {
			$(this).html("<h1>X</h1>");
			squaresChanged ++;
		}
	}
	lastSquare = ($(this).text());
	if (squaresChanged >= 5) {
		whoWon();
	}

	if (squaresChanged % 2 === 0) {
		$(".turn").html(
			"<p>Player X turn</p>"
		)
	}

	else {
		$(".turn").html(
			"<p>Player O turn</p>"
		)
	}
})


$("button").on("click", function() {
	$(".square").html("");
})

function whoWon() {
	var s1 = $(".square").eq(0).html();
	var s2 = $(".square").eq(1).html();
	var s3 = $(".square").eq(2).html();
	var s4 = $(".square").eq(3).html();
	var s5 = $(".square").eq(4).html();
	var s6 = $(".square").eq(5).html();
	var s7 = $(".square").eq(6).html();
	var s8 = $(".square").eq(7).html();
	var s9 = $(".square").eq(8).html();
	if (
		(s1 === s2 && s2 === s3 && s1 != "") ||
		(s4 === s5 && s5 === s6 && s4 != "") ||
		(s7 === s8 && s8 === s9 && s7 != "") ||
		(s1 === s4 && s4 === s7 && s1 != "") ||
		(s2 === s5 && s5 === s8 && s2 != "") ||
		(s3 === s6 && s6 === s9 && s3 != "") ||
		(s1 === s5 && s5 === s9 && s1 != "") ||
		(s3 === s5 && s5 === s7 && s3 != "") )
		{
			alert(lastSquare + " won!");
		}
	}
