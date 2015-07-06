var evenOdd;
var myFuncCalls = 0;
if (myFuncCalls%2===0){
  evenOdd="X"
  }
else{
  evenOdd="O"
  }


function changeText1(){
  myFuncCalls++;
  var obj= document.getElementById("i1");
  obj.innerHTML= evenOdd;
}
function changeText2(){
  myFuncCalls++;
  var obj= document.getElementById("i2");
  obj.innerHTML= evenOdd;
}
function changeText3(){
  myFuncCalls++;
  var obj= document.getElementById("i3");
  obj.innerHTML= evenOdd;
}
function changeText4(){
  myFuncCalls++;
  var obj= document.getElementById("i4");
  obj.innerHTML= evenOdd;
}
function changeText5(){
  myFuncCalls++;
  var obj= document.getElementById("i5");
  obj.innerHTML= evenOdd;
}
function changeText6(){
  myFuncCalls++;
  var obj= document.getElementById("i6");
  obj.innerHTML= evenOdd;
}
function changeText7(){
  myFuncCalls++;
  var obj= document.getElementById("i7");
  obj.innerHTML= evenOdd;
}
function changeText8(){
  myFuncCalls++;
  var obj= document.getElementById("i8");
  obj.innerHTML= evenOdd;
}
function changeText9(){
  myFuncCalls++;
  var obj= document.getElementById("i9");
  obj.innerHTML= evenOdd;
}
function clearBoard(){
  var clear1= document.getElementById("i1");
  var clear2= document.getElementById("i2");
  var clear3= document.getElementById("i3");
  var clear4= document.getElementById("i4");
  var clear5= document.getElementById("i5");
  var clear6= document.getElementById("i6");
  var clear7= document.getElementById("i7");
  var clear8= document.getElementById("i8");
  var clear9= document.getElementById("i9");
  clear1.innerHTML=" ";
  clear2.innerHTML=" ";
  clear3.innerHTML=" ";
  clear4.innerHTML=" ";
  clear5.innerHTML=" ";
  clear6.innerHTML=" ";
  clear7.innerHTML=" ";
  clear8.innerHTML=" ";
  clear9.innerHTML=" ";
}
