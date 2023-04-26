let age = 65;

/*
< For less than
> For more than
== Iqual to
<= For less than or iqual to
>= For more than or iqual to
!= Different to
!  Not
|| For OR
&& For AND
*/


// If and else statements
if (age >= 65) {
    console.log('You are an senior citzen!');
} else if (age > 18) {
    console.log('You are an adult!');
} else if (age < 0) {
    console.log("You haven't been born yet!");
} else {
    console.log('You are a child!');
}

// break - Breaks out of a loop entirely.
// continue - Skip a interation of a loop.

// Switch Case
let grade = 'B';

switch (grade) {
    case "A":
        console.log('You did great!');
        break;
    case "B":
        console.log('You did good!');
        break;
    case "C":
        console.log('You did okay!');
        break;
    case "D":
        console.log('You passed... barely!');
        break;
    case "F":
        console.log('You FAILED!');
        break;
    default:
        console.log(grade, 'is not a letter grade!');
        break;
}


// You can use switch with numbers if you do that way:
let agex = 20;

switch (true) {
    case agex >= 65:
        console.log('You are an senior citzen!');
        break;
    case agex >= 18:
        console.log('You are an adult!');
        break;
    case agex >= 0:
        console.log('You are a child!');
        break;
    default:
        console.log("You haven't been born yet!");
        break;
}

