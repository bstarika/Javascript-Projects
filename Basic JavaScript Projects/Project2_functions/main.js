function My_First_Function() {
    var str = "This text is blue";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML=result; //innerHTML modifies the content of an HTML element
}

function My_Second_Function() {
var para = document.createElement("P");     // Created a <p> element
para.innerText = "This is a paragraph";     // Inserted text
document.body.appendChild(para);            // Appended <p> to <body>                      
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course";      //use of += operator
    document.getElementById("Concatenate").innerHTML=sentence; //innerHTML modifies the content of an HTML element
}