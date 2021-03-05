document.write(typeof "Word");
document.write(typeof 3);
document.write("10" + 5);
document.write(10<2); //boolean false
document.write(10>2); //boolean true
document.write(2==2); //will display true
document.write(2==7); //will display false
document.write(6>2 && 11>4); // AND operator, will display true
document.write(5>3 && 1>10); // AND operator, although one is true, will display false
document.write(8>4 || 1>7); // OR operator, although one is false, will display true
document.write(1>4 || 5>6); // OR operator, will display false
function not_Function() {
    document.getElementById("Test6").innerHTML= !(20>10); //NOT operator
}
X=10;
Y=10;
document.write(X === Y); // will display true

X=10;
Y=9;
document.write(X === Y); //will display false

X=22;
Y="22";
document.write(X === Y); //will display false


function my_Function() {
    document.getElementById("Test").innerHTML= 0/0; // will display NaN as you cannot divide 0 by 0
    document.getElementById("Test2").innerHTML=isNaN('This is a string'); //utilizing NaN, will be true as a string is not a number
    document.getElementById("Test3").innerHTML=isNaN('1993'); //utilizing NaN, will be false as 1993 is a number
    document.getElementById("Test4").innerHTML=2E227;
    document.getElementById("Test5").innerHTML=-2E227;
}
console.log(2+2); //to locate, open Console w/ Dev Tools
console.log(2>7); //boolean logic w/ console.log() method

