// inheritance = a child class can inherit all the methods and proprieties from another class

// Animals is a parent, and his children has everything he has
class Animals {

    constructor(name, age) {
    this.name = name;
    this.age = age;
    }

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animals {

    constructor(name, age, runSpeed) {
        // The supper is getting the name and the age.
        super(name, age);
        this.runSpeed = runSpeed;
    }
    // No need to give a eat method once rabbit is a children from animals wich already have a eat method.
    run() {
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animals {

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animals {

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit('Habbibs', 5, 10);
const fish = new Fish('Nemo', 3, 25);
const hawk = new Hawk('Piggeoto', 8, 70);

rabbit.run();
rabbit.eat();
console.log(rabbit.age);
console.log(`The ${rabbit.name} has ${rabbit.age} years old`);
console.log(rabbit.runSpeed);

hawk.fly();
hawk.eat();
console.log(hawk.age);
console.log(`The ${hawk.name} has ${hawk.age} years old`);
console.log(hawk.flySpeed);

fish.swim();
fish.eat();
console.log(`The ${fish.name} has ${fish.age} years old`);
console.log(fish.swimSpeed);
