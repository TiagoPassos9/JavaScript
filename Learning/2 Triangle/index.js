let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextbox").value;
    b = document.getElementById("bTextbox").value;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = 'Side C: ' + c;
}