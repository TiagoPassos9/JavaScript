let a;
let b;
let c;

// Getting if the button was clicked.
document.getElementById("submitButton").onclick = function(){
    // Giving a the first textbox value.
    a = document.getElementById("aTextbox").value;
    // Giving b the second textbox value.
    b = document.getElementById("bTextbox").value;
    // Giving c the result.
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = 'Side C: ' + c;
}