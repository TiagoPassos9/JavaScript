// Try a code
try {
    let x = window.prompt('enter a number');
    x = Number(x);

    // throw = executes a user-defined error
    if(isNaN(x)) throw window.alert('That was not a number!');
    if(x == '') throw window.alert('That was empty!');

    window.alert(`${x} is a number`);
}
// Catch the error
// Error = The object with a description of something went wrong
catch(error) {
    // Show the error
    console.log(error);
}
// finally aways executes
finally {
    window.alert(`The tree is green`);
}