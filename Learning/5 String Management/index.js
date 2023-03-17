let userName = ' Tiago/Passos/';

console.log(userName);
// Displays the string's length
console.log(userName.length);
// Displays the string's first char
console.log(userName.charAt(0));
// Displays the first o:
console.log(userName.indexOf('o'));
// Displays the last o:
console.log(userName.lastIndexOf('o'));
// Trim get rid of empty aditional spaces
console.log(userName.trim());
// Turn userName into a uppercase
console.log(userName.toUpperCase());
// Turn userName into a lowerrcase
console.log(userName.toLowerCase());
// Replace the first / to be a space
console.log(userName.replace("/", " "));
// Replace every / to be a space
console.log(userName.replaceAll("/", " "));
// Captalizing
let letter = userName.trim().charAt(0).toUpperCase();
console.log(letter,userName.trim().slice(1));


let fullName = 'Tiago Passos', firstName, lastName;

lastName = fullName.slice(6);
console.log(lastName);

lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(lastName);
firstName = fullName.slice(0, fullName.indexOf(" ")+1)
console.log(firstName);