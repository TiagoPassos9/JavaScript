//-------------- 2D Arrays --------------
// Arrays
let fruits = ['apple', 'orange', 'banana'];
let vegetables = ['carrots', 'onions', 'potatoes']
let meats = ['eggs', 'chicken', 'fish'];
// An array of arrays

let groceryList = [fruits, vegetables, meats];
for (let list of groceryList) {
    console.log(list);
    for (let food of list) {
        console.log(food);
    }
}

// Changing an element
console.log(groceryList[2][0]);
groceryList[2][0] = 'beef'; // Changing the eggs for beef
console.log(groceryList[2][0]);

// Rest parameters = represents an indefinite number of parameters (packs arguments into an array)

let a = 1, b = 2, c = 3, d = 4, e = 5;

console.log(sum(a, b));
console.log(sumInfiniteElements(a, b, c, d, e));

// you can only sum 2 elements
function sum(a, b) {
    return a + b;
}

// you can only sum infinite elements
function sumInfiniteElements(...Numbrs) {
    let total = 0;
    for (let numbr of Numbrs) {
        total += numbr;
    }
    return total;
}