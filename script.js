
var disp = $("#display")[0]; // Needed to return native DOM object.
var d = disp.getContext('2d');
d.fillStyle = "rgba(255,0,0,0.5)";
d.beginPath();
d.moveTo(0,200);
d.lineTo(600,200);
d.moveTo(0,400);
d.lineTo(600,400);
d.moveTo(200,0);
d.lineTo(200,600);
d.moveTo(400,0);
d.lineTo(400,600);
d.stroke();
