const decrease = -1, reset = 0, increase = 1;
let current = 0;

document.getElementById("decreaseButton").onclick = function(){
    current += decrease;
    document.getElementById("p1").innerHTML = current;
}

document.getElementById("resetButton").onclick = function(){
    current = reset;
    document.getElementById("p1").innerHTML = current;
}

document.getElementById("increaseButton").onclick = function(){
    current += increase;
    document.getElementById("p1").innerHTML = current;
}


/* -------- Another way to do it --------
let x = 0;

document.getElementById("decreaseButton").onclick = function(){
    document.getElementById("p1").innerHTML = x-=1;
}

document.getElementById("resetButton").onclick = function(){
    document.getElementById("p1").innerHTML = x=0;
}

document.getElementById("increaseButton").onclick = function(){
    document.getElementById("p1").innerHTML = x+=1;
}
*/