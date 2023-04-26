// ------ Object as arguments ------

class Car{

    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car('Mustang', 2023, 'blue');
const car2 = new Car('Corvette', 2024, 'red');
const car3 = new Car('BMW', 2022, 'black');

function displayInfo(car) {
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color) {
    car.color = color;
}

// car3 is a object
changeColor(car3, 'white');
displayInfo(car3);


// ------ Array of Objects ------

const cars = [car1, car2, car3]

startRace(cars);

function startRace(cars) {
    for (const car of cars) {
        car.drive();
    }
}


// ------ Array of Objects ------
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

let cards = [
    new Card('a', 'Hearts'),
    new Card('a', 'Spades'),
    new Card('a', 'Diamonds'),
    new Card('a', 'Clubs'),
    new Card('2', 'Hearts'),
    new Card('2', 'Spades'),
    new Card('2', 'Diamonds'),
    new Card('2', 'Clubs')
];

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].value, cards[i].suit);
}

// Or

cards.forEach(card => console.log(`${card.value} ${card.suit}`));

// Anonymous objects = Objects without a name

