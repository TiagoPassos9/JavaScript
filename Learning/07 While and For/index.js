let Name = '';

// While the name is empty or null do it:
/*while(Name == '' || Name == null) {
    Name = window.prompt('What is your name?')
    console.log(Name);
}*/

// Do it While the name is empty or null. It runs the code at least once:
do{
    Name = window.prompt('What is your name?')
}while(Name == '' || Name == null)


let j = 5, y = [];

// For i < 5 do:
// Every time the code runs, the i will be increased one until i == 5 or i > 5.
for (let i = 0; i < 5; i++) {
    y[i] = window.prompt('Tell me '+j+' number(s)');
    j--;
}

let prices = [5, 10, 15, 20, 25];

// Showing every element of the array.
for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
}

// Other ways to show every element of the array.
for (let price of prices) {
    console.log(price);
}

prices.forEach(price => console.log(`${price}`));

document.getElementById("p1").innerHTML = 'Hello ' + Name + '!';
document.getElementById("p2").innerHTML = 'The sum of the numbers you typed is: ' + (Number(y[0]) + Number(y[1]) + Number(y[2]) + Number(y[3]) + Number(y[4]));

// You can also use a loop inside another loop, its called a nested loop.
