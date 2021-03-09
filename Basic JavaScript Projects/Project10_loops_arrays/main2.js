let car = {                     //let keyword, object and return statement
    make: "Audi ",
    model: "S4 ",
    year: "2011 ",
    color: "silver ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";                  //break statement
var a;
for (a = 0; a < 10; a++) {
    if (a === 3) { break; }
    text += "The number is " + a + "<br>";
  }
document.getElementById("breaks").innerHTML = text;

var text = "";                  //continue statement
var b;
for (b = 0; b < 10; b++) {
    if (b === 3) { continue; }
    text += "The number is " + b + "<br>";
  }
document.getElementById("continue").innerHTML = text;