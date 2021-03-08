function full_Sentence() {      // concat() method connecting strings
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat (part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {       //slice() method sectioning out string
    var Sentence = "I am a coding student at The Tech Academy";
    var Section = Sentence.slice(24-40);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_case() {         //uppercase() method
    var str = "Breanna Starika";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}

function search_Method() {      //search() method
    var str = "Visit The Tech Academy";
    var n = str.search("The Tech Academy");
    document.getElementById("search").innerHTML = n;
}

function string_Method() {      //string() method
    var X = 227;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {   //toprecision() method
    var X = 227227.11112222;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {       //tofixed() method
    var num = 2.27;
    var f = num.toFixed(0);
    document.getElementById("fixed").innerHTML = f;
}

function value_Method() {       //valueof() method
    var str = "Hello World!";
    var val = str.valueOf();
    document.getElementById("value").innerHTML = val;
}