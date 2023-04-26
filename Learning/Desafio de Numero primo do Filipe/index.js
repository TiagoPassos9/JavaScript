let numerosPrimos = []

// O que executar quando Clicar no botão
document.getElementById("maxButton").onclick = function(){
    numerosPrimos = []
    // Limpando
    document.getElementById("numeros").innerHTML = '';
    // Recebe o valor maximo para a variável maxNumber
    maxNumber = document.getElementById("maxInput").value;
    // Executa a função getNumPrimo()
    getNumPrimo(maxNumber);
    // mostrar os números que a função inseriu dentro do array
    document.getElementById("numeros").innerHTML = numerosPrimos;
}

function getNumPrimo(maxNumber) {
    if (maxNumber > 1) {
        if (maxNumber == 2) {
            numerosPrimos.push(maxNumber)
        } else if (maxNumber > 2){
            for (let eachNumberToTest = 0; eachNumberToTest <= maxNumber; eachNumberToTest++) {
                let testTimes = 0, multiple = 0;
                if (maxNumber == 2) {
                    numerosPrimos.push(maxNumber);
                } else if (maxNumber > 2) {
                    for (let eachNumberToDivide = 1; eachNumberToDivide <= eachNumberToTest; eachNumberToDivide++) {
                        if (eachNumberToTest % eachNumberToDivide != 0) {
                            testTimes++;
                            continue;
                        } else {
                            testTimes++;
                            multiple++;
                            if (eachNumberToTest == eachNumberToDivide && multiple == 2) {
                                numerosPrimos.push(eachNumberToTest);
                            }
                        }
                    }
                }
            }
        }
    } else if (maxNumber <= 1) {
        document.getElementById("numeros").innerHTML = `Não existe números primos existentes antes ou até ${maxNumber}`;
    }
}

