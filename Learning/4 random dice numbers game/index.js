let x, y, user, computer;

user = 0;
computer = 0;

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = document.getElementById("input").value;
    document.getElementById("p1").innerHTML = x;
    if (Number(y) == Number(x)) {
        document.getElementById("p2").innerHTML = 'Parabéns, você ganhou, receberá 1 ponto';
        user += 1;
        document.getElementById("voce").innerHTML = user;
    } else {
        console.log(input);
        document.getElementById("p2").innerHTML = 'Você perdeu, a maquina receberá 1 ponto';
        computer += 1;
        document.getElementById("maquina").innerHTML = computer;
    }
}