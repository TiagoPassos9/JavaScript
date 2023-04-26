// ----- Timeout -----
// Timeout invokes a function after a number of milliseconds.
// A asynchronous function (doesnt pause execution).

let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage() {
    alert(`Buy this course for $500!`);
}

function secondMessage() {
    alert(`This is not a scam!`);
}

function thirdMessage() {
    alert(`DO IT!`);
}

document.getElementById('myButton').onclick = function() {
    clearTimeout(timer1, timer2, timer3);
    alert(`Thanks for buying!`);
}


// ----- Interval -----
// Interval invokes a function repeatedly after a number of milliseconds.
// A asynchronous function (doesnt pause execution).

let count = 0;
let max = window.prompt('Count up to what number?');
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
    count++;
    console.log(count);
    if (count >= max) {
        clearInterval(myTimer);
    }
}


// ----- Date -----

let date = new Date();
// let date = new Date(10000000);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date('January 1, 2023 00:00');

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getmilliseconds();

date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setmilliseconds(0);
*/
//date = date.toLocaleDateString();
document.getElementById("dateLabel").innerHTML = formatDate(date);

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`;
}
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //let amOrPm = hours >= 12 ? "pm" : "am";
    //hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds}`;// ${amOrPm}`;
}
