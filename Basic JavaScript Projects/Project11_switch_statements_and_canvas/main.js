function Animal_Function() {        //switch statement
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great animal!";
    switch(Animals) {
        case "Wolf":
            Animal_Output = "Wolf" + Animal_String;
        break;
        case "Shark":
            Animal_Output = "Shark" + Animal_String;
        break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Eagle":
            Animal_Output = "Eagle" + Animal_String;
        break;
        case "Elephant":
            Animal_Output = "Elephant" + Animal_String;
        break;
        case "Dolphin":
            Animal_Output = "Dolphin" + Animal_String;
        break;
        case "Monkey":
            Animal_Output = "Monkey" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function() {   //getelementsbyclassname() method
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML= "The text has changed."; //set index value of variable A to 0, which will be applied to first element with class "Click"
}

var c = document.getElementById("myCanvas"); //style canvas 
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);