/*
To create a function, you need to type:

function nameFunction() {
    everything you want inside that function;
}

To call a function you just need to type:
nameFunction();
*/

let Name = 'Tiago', age = 20, area, width, height;

happyBirthday(Name, age);


function happyBirthday(Name, age) {
    for (let i = 0; i < 2; i++) {
        console.log('Happy birthday to you');
    }
    console.log(`Happy birthday dear ${Name}`);
    console.log('Happy birthday to you');
    console.log(`You are ${age} years old`);
}

// Getting something with return statement

width = window.prompt('Enter width')
height = window.prompt('Enter height')
area = getArea(width, height);

console.log('The area is: '+ area);

function getArea(width, height) {
    return width*height;
}

// Ternary operator = Shortcut for an 'if/else statement'
// Takes 3 operands: 
// 1. A condition with ?, 2. Expression if true :, 3. Expression if false

let adult = checkAge(20);
console.log(adult);

// if age >= 18 return true, else, return false
// Condition ? ifTrue : ifFalse
function checkAge(age) {
    return age >= 18 ? true : false;
}
