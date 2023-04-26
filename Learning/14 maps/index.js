// Map is a object that holds key-value pairs of any data type

const store = new Map([
    ['t-shirt', 20],
    ['jeans', 30],
    ['socks', 10],
    ['underwear', 50],
    ['dress', 70]
])

let shoppingCart = 0;

shoppingCart += store.get('t-shirt');
shoppingCart += store.get('underwear');
//shoppingCart += store.set('hat', 40);
//store.delete('hat')
console.log(store.has('hat'));
console.log(shoppingCart);

store.forEach((value, key) => console.log(`${key} $${value}`));

