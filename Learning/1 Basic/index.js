// Learning JavaScript by: https://www.youtube.com/watch?v=8dWL3wF_OMw&t=54s
// a comment can be made by typing / twice or:
/*
    the same way as it is made in c 
*/

// console.log shows what you want to show on console
console.log('Hello World!');
console.log('i think i will love to work with javascript');

/* ------------- Variables -------------

    Declaration: (var, let, const) (const cannot be reassigned)
    Assignment (= assignment operator)

*/

let age = 20; //number
let student = true; //boolean
let firstName; //string
firstName = 'Tiago';

let i = 1;
// Sum i+1
i += 1;

console.log(student);
console.log(i);

// Getting a element by id
document.getElementById("p1").innerHTML = 'Meu nome é ' + firstName;

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
    document.getElementById("name").innerHTML = 'Seu nome é ' + username;
}

//-------------- Type Conversion --------------

let agex = window.prompt('How old are you?')

// Agex come as a string
console.log(typeof agex);
agex = Number(agex); // Turning agex into a number
console.log(typeof agex);
agex +=1;

console.log('happy Birthday! You are', agex, ' years old');

let x;
let y;
let z;

x = Number('3.14') // Turning a string into a number
y = String (3.14) // Turning a number into a string
z = Boolean('') //Turning a string into a boolean will show you false if its empty and true if there are something in it
// and if you try to assign a name into a number will show you NaN (Not a Number)

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

z = Boolean('something')

console.log(z, typeof z); // Returning true