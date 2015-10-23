$(".square").css("height", "100px");
$(".square").css("width", "100px");
$(".square").css("border", "solid black 2px");

$(".gameboard").css("display", "inline-block");
$(".gameboard").css("width", "350px")

$(".column").css("float", "left");

var totalClick = 0;

$(".square").on("click", function() {
	totalClick++;
	if ($(this).html() != "<h1>X</h1>" && $(this).html() != "<h1>O</h1>")  {
		if (totalClick % 2 === 1) {
			$(this).html("<h1>X</h1>");
		} else {
			$(this).html("<h1>O</h1>");
		}
	}
})

$("button").on("click", function() {
	$(".square").css("background", "white");
})