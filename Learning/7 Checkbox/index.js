document.getElementById("myButton").onclick = function() {
    const myCheckbox = document.getElementById("myCheckbox")

    if (myCheckbox.checked) {
        document.getElementById("div").innerHTML = 'You are subscribed!';
    } else {
        document.getElementById("div").innerHTML = 'You are not subscribed!';
    }


    const visaBtn = document.getElementById("visaBtn")
    const mastercardBtn = document.getElementById("mastercardBtn")
    const paypalBtn = document.getElementById("paypalBtn")

    if (visaBtn.checked && myCheckbox.checked) {
        document.getElementById("div").innerHTML = 'You are subscribed and paying with a Visa!';
    } else if (mastercardBtn.checked && myCheckbox.checked) {
        document.getElementById("div").innerHTML = 'You are subscribed and paying with a Mastercard!';
    } else if (paypalBtn.checked && myCheckbox.checked) {
        document.getElementById("div").innerHTML = 'You are subscribed and paying with a Paypal!';
    } else if (visaBtn.checked && !myCheckbox.checked) {
        document.getElementById("div").innerHTML = 'You are not subscribed but is paying with a Visa!';
    } else if (mastercardBtn.checked && !myCheckbox.checked) {
        document.getElementById("div").innerHTML = 'You are not subscribed but is paying with a Mastercard!';
    } else if (paypalBtn.checked && !myCheckbox.checked) {
        document.getElementById("div").innerHTML = 'You are not subscribed but is paying with a Paypal!';
    }
}