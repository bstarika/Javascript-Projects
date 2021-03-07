function Ride_Function() {  //ternary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { //ternary operator
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 18) ? "You are old enough" : "You are not old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {    //this. keyword, object constructor
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //new. keyword, object constructor
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function GPA_Function() {  
    var student, Can_apply; //assigning variable to reserved word (ex. replace student w/ new)
    GPA = document.getElementById("GPA").value;
    Can_apply = (GPA >= 2) ? "You are able to " : "You are not able to";
    document.getElementById("Apply").innerHTML = Can_apply + " apply.";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() { 
        var Starting_point= 9;
        function Plus_one() {Starting_point +=1;}  //nested function
        Plus_one();
        return Starting_point;
    }
}