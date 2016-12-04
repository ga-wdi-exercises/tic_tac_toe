window.onload= function(){
  var playerOne= "X";
  var playerTwo="O";
  var squares =document.querySelectorAll('.flex-item');
  var i;
  for(i= 0;i < squares.length; i++){
    squares[i].addEventListener("click",function(){
      // alert("I am clicked!")
      this.innerText == playermoves[0];
    });

  }
};
