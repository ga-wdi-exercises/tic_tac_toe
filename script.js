var game = {
 size: 9,
 grid: [],
 counter: 0,
 diagonal1: [],
 diagonal2: [0],
 rowLen: 0,
 isHovering: false,
 boxSize: 0,
 ender: function(array){
    for (i=0; i<game.size; i++){
      game.grid[i].el.off();
      if (array.indexOf(i) < 0){
        game.grid[i].el.find('.rainbow-wordmark__canvas').remove();
      }
    }
    $('.winner').html('You won!');
    $('.turn').html('');
  },
 buildDiagonals: function(){

   var dIncrementor = 0;
     for (var i=0;i<game.rowLen;i++){
       dIncrementor += game.rowLen-1;
       game.diagonal1.push(dIncrementor);
     }

     dIncrementor = 0;
     for (i=0;i<game.rowLen-1;i++){
       dIncrementor += game.rowLen+1;
       game.diagonal2.push(dIncrementor);
     }

 },
 checkForWinner: function(pos) {
   var col = (pos % game.rowLen);
   var rowF = (pos - col);

   var cwCounter = [];
   var rwCounter = [];
   //check col
   for (i=0; i<game.rowLen; i++){
     var checkSpot = (i * game.rowLen) + col;

     if (game.grid[checkSpot].el.html() == game.grid[pos].el.html()){
       cwCounter.push(checkSpot);
     }
   }
   if (cwCounter.length === game.rowLen) {
    console.log("win!");
    game.ender(cwCounter);
    game.isHovering = true;
    }
   //check row
   for (i=rowF; i<(rowF+game.rowLen);i++){
     if (game.grid[i].el.html() == game.grid[pos].el.html()){
       rwCounter.push(i);
     }
   if (rwCounter.length === game.rowLen) {
    console.log("win!");
    game.ender(rwCounter);
    game.isHovering = true;
    }
   }
   //check diagonals
   if (game.diagonal1.indexOf(pos)>-1) {
                 var Counter=0;
                 for (i=0; i<game.rowLen;i++){
                   if (game.grid[game.diagonal1[i]].el.html() == game.grid[pos].el.html()){
                     Counter++;
                   }
                 if (Counter === game.rowLen) {console.log("win!");
                  game.ender(game.diagonal1);
                  game.isHovering = true;
                  }
                 }
   }
   if (game.diagonal2.indexOf(pos)>-1) {
                 var Counter2=0;
                 for (i=0; i<game.rowLen;i++){
                   if (game.grid[game.diagonal2[i]].el.html() == game.grid[pos].el.html()){
                     Counter2++;
                   }
                 if (Counter2 === game.rowLen) {console.log("win!");
                  game.ender(game.diagonal2);
                  game.isHovering = true;
                }
                 }
               }}
};

game.rowLen = parseInt(Math.sqrt(game.size));


function Box() {
 this.el = null;

 this.initialize = function(container) {
   this.el = $('<div class="tttBox"><h1 class="rainbow-wordmark"><canvas class="rainbow-wordmark__canvas" width="800" height="500"></canvas></h1></div>');
   container.append(this.el);
   this.el.on("click", this.clickHandler);
   this.el.css('width', game.boxSize+'%');
   this.el.css('height', game.boxSize+'%');
 };

 this.clickHandler = function() {
   game.counter++;

   // Word Rainbow //
   var wordmark = $(this).find('.rainbow-wordmark');

   var wordmarkImg = $(this).find('.rainbow-wordmark__image');
   var canvas = $(this).find('.rainbow-wordmark__canvas');
   var ctx = canvas[0].getContext('2d');
   var trailCount = 90;
   var canvasWidth = canvas.width;
   var canvasHeight = canvas.height;

   // ----- load image ----- //

   var whiteImg = new Image();
   whiteImg.onload = onWhiteImgLoad;

   if (game.counter % 2 === 0) {
     whiteImg.src = 'x.png';
   } else {
     whiteImg.src = 'o.png';
   }

   function onWhiteImgLoad() {
     setColorCanvas( 'blue', '#19F' );
     setColorCanvas( 'gold', '#EA0' );
     setColorCanvas( 'orange', '#E62' );
     setColorCanvas( 'magenta', '#C25' );
     animate();
   }

   var colorCanvases = {};

   // get a canvas with the logotype rendered in a color
   function setColorCanvas( name, color ) {
     var colorCanvas = document.createElement('canvas');
     colorCanvas.width = whiteImg.width;
     colorCanvas.height = whiteImg.height;
     var colorCtx = colorCanvas.getContext('2d');
     colorCtx.drawImage( whiteImg, 0, 0 );
     colorCtx.globalCompositeOperation = 'source-in';
     colorCtx.fillStyle = color;
     colorCtx.fillRect( 0, 0, whiteImg.width, whiteImg.height );
     colorCanvases[ name ] = colorCanvas;
   }

   // ----- animate rainbow ----- //

   game.isHovering = false;
   var t = 0;

   var rainbow = [];
   (function() {
     for ( var i=0; i < trailCount; i++ ) {
       rainbow.push(null);
     }
   })();


   var colorCycle = [ 'blue', 'gold', 'orange', 'magenta' ];

   function animate() {
     update();
     render();
     requestAnimationFrame( animate );
   }

   function update() {
     t++;

     var colorCycleIndex = Math.floor( t / 8 ) % 4;
     var nextColor = game.isHovering ? colorCycle[ colorCycleIndex ] : null;

     rainbow.pop();
     rainbow.pop();
     rainbow.pop();
     rainbow.unshift( nextColor );
     rainbow.unshift( nextColor );
     rainbow.unshift( nextColor );
   }

   function render() {
     ctx.clearRect( 0, 0, canvasWidth, canvasHeight );

     // iterate backwards through rainbow
     for ( var i = rainbow.length-1; i >= 0; i-- ) {
       var color = rainbow[i];
       if ( color ) {
         ctx.drawImage( colorCanvases[ color ], i+1, i+1 );
       }
     }
   }


  // ----------------------------------------------------------------------------------

   if (game.counter % 2 === 0) {
     $('.turn').html("O's turn to play!");
     $(this).find('h1').append($('<img class="rainbow-wordmark__image" src="x.png" alt="X" />'));

   }
   else if (game.counter % 2 === 1) {
     $('.turn').html("X's turn to play!");
     $(this).find('h1').append($('<img class="rainbow-wordmark__image" src="o.png" alt="X" />'));
   }
   $(this).off();
   this.pos = $(this).index();
   game.checkForWinner(this.pos);
 };
}


$('.start').submit(function(){
event.preventDefault();


if (parseInt($('.startInput').val())<3) {
  alert('Enter a value above 2');
} else {


  game.size = parseInt($('.startInput').val()) * parseInt($('.startInput').val());
  console.log(game.size);
  game.rowLen = parseInt($('.startInput').val());
  game.boxSize = 100/parseFloat($('.startInput').val())-1;

game.buildDiagonals();

  $('.column').css('display','inline');
  $('.start').css('display','none');

      for (var i=0; i<game.size; i++){
         game.grid[i] = new Box();
         game.grid[i].initialize($('.board'));
         console.log(game.size);
      }
}
});
