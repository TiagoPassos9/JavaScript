// toLocaleString() = returns a string with a language sensitive representation of this.

//number.toLocaleString(locale, {options});
// locale = Specify that language "en-US"
// options = Object with formatting options.

let myNum = 123456789, myNum2 = 123456789, myNum3 = 123456789, myNum4 = 17;

myNum = myNum.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
console.log(myNum);

myNum2 = myNum2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(myNum2);

myNum3 = myNum3.toLocaleString('pt-PT', {style: 'currency', currency: 'EUR'})
console.log(myNum3);

myNum4 = myNum4.toLocaleString(undefined, {style: 'unit', unit: 'celsius'})
console.log(myNum4);