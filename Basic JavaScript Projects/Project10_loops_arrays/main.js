function Call_Loop() {          //while loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML= Digit;
}

function length() {             //string length property
    var str = "Hello World!";
    var len = str.length;
    document.getElementById("length").innerHTML= len;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";               // for loop
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function pet_names() {         //array and calling a function
    var Pet_Name = [];
    Pet_Name[0] = "Mochi is 10 years old";
    Pet_Name[1] = "Ziah is 5 years old";
    Pet_Name[2]= "Loki is 6 months old";
    document.getElementById("Dog").innerHTML = Pet_Name[0] + ".";
}

function constant_function() { //const keyword
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML= "The cost of the " + Musical_Instrument.type + " is " + Musical_Instrument.price;
}

var X = 27;                     //let keyword
document.write(X);
{
    let X = 22;
    document.write("<br>" + X);
}
document.write("<br>" + X);
    

    