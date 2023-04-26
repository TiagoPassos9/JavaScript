
document.getElementById('submitButton').onclick = function() {
    let temp;

    if (document.getElementById('cButton').checked) {
        temp = Number(document.getElementById('textbox').value);
        temp = toCelsius(temp);
        document.getElementById('tempLabel').innerHTML = `${temp}ºC`
    } else if (document.getElementById('fButton').checked){
        temp = Number(document.getElementById('textbox').value);
        temp = toFahrenheit(temp);
        document.getElementById('tempLabel').innerHTML = `${temp}ºF`
    } else {
        document.getElementById('tempLabel').innerHTML = 'Select a unit'
    }
}


let temp = 32;
function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}


function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}