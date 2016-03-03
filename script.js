$(document).ready(function () {
  var box = $(".box");
  var boxChange = true;
  box.click(function () {
    if(boxChange == true){
      this.textContent =  "X";
      boxChange = false;
    }else if(boxChange == false){
      this.textContent = "O";
      boxChange = true;
    }
  })

  $('#btn').click(function () {
    var box = $(".box");
    box.text("");
  })
})
