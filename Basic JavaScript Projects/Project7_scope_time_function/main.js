function Add_numbers_1() {      //local variable
    var X = 7;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write (X + 20);    //won't display as X isn't defined
}
function Add_numbers_2() {
    console.log(X + 20);        //use console.log() method to debug code
}

var X = 7;                      //local variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 20);
}
Add_numbers_1();
Add_numbers_2();

function get_Date(){            //if statements
    if (new Date().getHours() > 18) {       //Date Method
        document.getElementById("Greeting").innerHTML= "How are you today?"; //will display if time is greater than 6PM
    }
}

if (2<7) {                      //if statements
    document.write ("<br>" + "The left number is smaller than the number on the right")
}

function GPA_function() {       //if else statements
    GPA = document.getElementById("GPA").value;
    if (GPA>=2) {
        Apply = "You are able to apply";
    }
    else {
        Apply = "You are not able to apply";
    }
    document.getElementById("What_is_your_GPA?").innerHTML= Apply;
}

function Time_function() {      //else if statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}