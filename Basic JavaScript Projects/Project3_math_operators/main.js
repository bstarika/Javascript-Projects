function addition_function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2+2=" + addition;
}
function subtraction_function() {
    var subtraction = 2-2;
    document.getElementById("Math2").innerHTML = "2-2=" + subtraction;
}
function multiplication() {
    var multiply = 2*2;
    document.getElementById("Math3").innerHTML = "2*2=" + multiply;
}
function division() {
    var divide = 2/2;
    document.getElementById("Math4").innerHTML = "2/2=" + divide;
}
function more_Math() {
    var simple_Math = (2+2)*2/-2;
    document.getElementById("Math5").innerHTML = "(2+2)*2/-2=" + simple_Math;
}
function modulus_operator() {
    var simple_Math = 25%6;
    document.getElementById("Math6").innerHTML = "25%6= " + simple_Math;
}
function negation_operator(){
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}
function round_number(){
    document.getElementById("Math8").innerHTML = Math.round(4.4);
}


var X = 5;
X++;
document.write(X);
var X = 5.25;
X--;
document.write(X);

window.alert(Math.random());


