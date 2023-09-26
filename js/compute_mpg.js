window.onload=function(){
  //register an on click even for the calculate button
  var calculateBtn=document.getElementById("calculate");
  calculateBtn.onclick=processMPG;
  //PLACE THE FOCUS on the miles driven field
  var milesDrivenField=document.getElementById("milesdriven");
  milesDrivenField.focus();
}
//task 1
var $=function(id){
  return document.getElementById(id);
}
var calculateMPG=function(m,g){
  var mpg=m/g;
  mpg=mpg.toFixed(1);
  return mpg;
}

var processMPG=function(){
  //1. collect all the input for miles driven
  var miles=parseFloat($("milesdriven").value);
  var gallons=parseInt($("ngallons").value);
  //2. collect the input for gallons used
  if(isNaN(miles)|| isNaN(gallons)){
    alert("One or more entries is not a number.")
  }
  else if(miles<=0||gallons<=0){
    alert("One or more entries is invalid")
  }
  else{
//3. validate the input
$("milespergallon").value=calculateMPG(miles,gallons);
  }
}
  //4. compute and display miles per gallon
window.onload=function(){
  $("calculate").onclick=processMPG;
  $("milesdriven").focus();
}