
var counter = 0;
var state1 = true;
var state2=true;
var state3=true;
var state4=true;
var state5=true;
var state6=true;
var state7=true;
var state8=true;
var state9=true;

function myFunction1() {


    if(counter % 2==0 && state1 ==true)
    {

    var add = (function () {
      document.getElementById("cell1").style.color = "Blue";
      document.getElementById("cell1").innerHTML = "0";
      state1 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state1 ==true){


      var add = (function () {
        document.getElementById("cell1").innerHTML = "X";
state1 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}


function myFunction2() {


    if(counter % 2==0 && state2 ==true)
    {

    var add = (function () {
      document.getElementById("cell2").style.color = "Blue";
      document.getElementById("cell2").innerHTML = "0";
      state2 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state2 ==true){


      var add = (function () {
        document.getElementById("cell2").style.color = "Blue";
        document.getElementById("cell2").innerHTML = "X";
state2 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}

function myFunction3() {


    if(counter % 2==0 && state3 ==true)
    {

    var add = (function () {
      document.getElementById("cell3").style.color = "Blue";
      document.getElementById("cell3").innerHTML = "0";
      state3 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state3 ==true){


      var add = (function () {
        document.getElementById("cell3").style.color = "Blue";
        document.getElementById("cell3").innerHTML = "X";
state3 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}


function myFunction4() {


    if(counter % 2==0 && state4 ==true)
    {

    var add = (function () {
      document.getElementById("cell4").style.color = "Blue";
      document.getElementById("cell4").innerHTML = "0";
      state4 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state4 ==true){


      var add = (function () {
        document.getElementById("cell4").style.color = "Blue";
        document.getElementById("cell4").innerHTML = "X";
state4 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}

function myFunction5() {


    if(counter % 2==0 && state5 ==true)
    {

    var add = (function () {
      document.getElementById("cell5").style.color = "Blue";
      document.getElementById("cell5").innerHTML = "0";
      state5 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state5 ==true){


      var add = (function () {
        document.getElementById("cell5").style.color = "Blue";
        document.getElementById("cell5").innerHTML = "X";
state5 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}

function myFunction6() {


    if(counter % 2==0 && state6 ==true)
    {

    var add = (function () {
      document.getElementById("cell6").style.color = "Blue";
      document.getElementById("cell6").innerHTML = "0";
      state6 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state6 ==true){


      var add = (function () {
        document.getElementById("cell6").style.color = "Blue";
        document.getElementById("cell6").innerHTML = "X";
state6 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}

function myFunction7() {


    if(counter % 2==0 && state7 ==true)
    {

    var add = (function () {
      document.getElementById("cell7").style.color = "Blue";
      document.getElementById("cell7").innerHTML = "0";
      state7 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state7 ==true){


      var add = (function () {
        document.getElementById("cell7").style.color = "Blue";
        document.getElementById("cell7").innerHTML = "X";
state7 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}

function myFunction8() {


    if(counter % 2==0 && state8 ==true)
    {

    var add = (function () {
      document.getElementById("cell8").style.color = "Blue";
      document.getElementById("cell8").innerHTML = "0";
      state8 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state8 ==true){


      var add = (function () {
        document.getElementById("cell8").style.color = "Blue";
        document.getElementById("cell8").innerHTML = "X";
state8 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}

function myFunction9() {


    if(counter % 2==0 && state9 ==true)
    {

    var add = (function () {
      document.getElementById("cell9").style.color = "Blue";
      document.getElementById("cell9").innerHTML = "0";
      state9 =false;
      return function () {return counter += 1; }
    })();

    add();

    }
    else if(state9 ==true){


      var add = (function () {
        document.getElementById("cell9").style.color = "Blue";
        document.getElementById("cell9").innerHTML = "X";
state9 =false;
        return function () {return counter += 1;}
      })();

      add();

}

else{ }


}


function myReset(){
  document.getElementById("cell1").style.color = "Blue";
  document.getElementById("cell1").innerHTML = "__";

  document.getElementById("cell2").style.color = "Blue";
  document.getElementById("cell2").innerHTML = "__";

  document.getElementById("cell3").style.color = "Blue";
  document.getElementById("cell3").innerHTML = "__";

  document.getElementById("cell4").style.color = "Blue";
  document.getElementById("cell4").innerHTML = "__";

  document.getElementById("cell5").style.color = "Blue";
  document.getElementById("cell5").innerHTML = "__";

  document.getElementById("cell6").style.color = "Blue";
  document.getElementById("cell6").innerHTML = "__";

  document.getElementById("cell7").style.color = "Blue";
  document.getElementById("cell7").innerHTML = "__";

  document.getElementById("cell8").style.color = "Blue";
  document.getElementById("cell8").innerHTML = "__";

  document.getElementById("cell9").style.color = "Blue";
  document.getElementById("cell9").innerHTML = "__";

  counter=0;
  state1= true;
  state2 =true;
  state3 =true;
  state4 =true;
  state5 =true;
  state6 =true;
  state7 =true;
  state8 =true;
  state9 =true;

}
