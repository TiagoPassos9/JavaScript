// Learning JavaScript by: https://www.youtube.com/watch?v=8dWL3wF_OMw&t=54s
// A comment can be made by typing / twice or:
/*
    That way is very
    useful for
    multiline comments
*/

// console.log Shows what you want to show on console.
console.log('Hello World!');
console.log('i think i will love to work with javascript');

/* ------------- Variables -------------

    Declaration: (var, let, const) (const cannot be reassigned)
    Assignment (= assignment operator)

*/

let age = 20;           // Number
let student = true;     // Boolean
let firstName;          // String
let array = ['1', '2']; // Array

firstName = 'Tiago';

let i = 1;
// Sum i+1 
i += 1;

console.log(student);
console.log(i);

// Getting an element by id.
document.getElementById("p1").innerHTML = 'My name is ' + firstName;

//-------------- Arithmetics --------------

let students = 20;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students %= 2;

let result = 1 + 2 * (3 + 4);
console.log(result);

//-------------- User Input --------------

let username;
document.getElementById("nameButton").onclick = function(){
    username = document.getElementById("nameInput").value;
    document.getElementById("name").innerHTML = 'Your name is ' + username;
}

//-------------- Type Conversion --------------

let agex = window.prompt('How old are you?');

// Agex come as a string
console.log(typeof agex);
agex = Number(agex); // Turning agex into a number
console.log(typeof agex);
agex +=1;

console.log('happy Birthday! You are', agex, 'years old');

let x;
let y;
let z;

x = Number('3.14') // Turning a string into a number.
y = String (3.14)  // Turning a number into a string.
z = Boolean('')    // Turning a string into a boolean will show you false if its empty and true if there are something in it.
// And if you try to assign a name into a number will show you NaN (Not a Number).

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

z = Boolean('something');

console.log(z, typeof z); // Returning true

//-------------- Arrays --------------
let numbers = [1, 2, 3]; // Array
let fruits = ['apple', 'orange', 'banana'];

console.log(fruits[0]);  // Showing the first element
fruits[0] = 'coconut';   // Changing the first element from apple to a coconut.
fruits.push('apple')     // Adding an element into the array.
fruits.pop();            // Removing the last element.
fruits.unshift('mango'); // Adding an element to the beginning.
fruits.shift();          // Removes element from beginning.
console.log(fruits);     // Showing the array.
console.log(...fruits);  // Showing the array, but spreading into individual elements, so it will show without '[', ']' and ','.
fruits = fruits.sort()   // Alphabetical order.
//fruits = fruits.sort().reverse();// Reverse alphabetical order.

let length = fruits.length;           // Giving the length of fruit array into that variable.
let index = fruits.indexOf('orange'); // Searching for orange, that will return the orange's element.

console.log(index); // It returns 1, but if orange wasn't one of the elements the index will return -1.

// Math
let maximum = Math.max(numbers)
console.log(maximum); // Will return NaN, because of its a array, instead you can do:
maximum = Math.max(...numbers) // spreading the array into separated numbers
console.log(maximum);

// Showing every element of the array.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/*// Another way to show every element of the array.
for (let fruit of fruits) {
    console.log(fruit);
}*/


/*
// var vs let:

// Exemple:



// It works
for (var j = 0; j < 3; j++) {
    console.log(j);
}
// It dont
function tryJ() {
    for (var j = 0; j < 3; j++) {
        console.log(j);
    }
}
// Neither it
for (let j = 0; j < 3; j++) {
    console.log(j);
}


//console.log(i);

if you try to get i value using console.log(i);
You will receive: Uncaught ReferenceError: i is not defined at ...
It is because the i was created inside the for and do not exist outside it,
but if you use the var, you will still get the i value, but it cannot get if it was a function.
If you want to use var, dont use it as a global variable yet, because it can change browser proprieties.
A global variable is a variable declared outside any function.
*/
