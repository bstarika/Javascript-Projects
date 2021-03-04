function my_dictionary() {              //dictionary w/ KVP
    var Animal = {
        Species: "Dog",
        Color: "White",
        Breed: "Husky",
        Age: 10,
        Sound: "Woof!"
    };
    delete Animal.Color;            // word operator
    document.getElementById("breed").innerHTML=Animal.Breed;
    document.getElementById("color").innerHTML=Animal.Color; 
}