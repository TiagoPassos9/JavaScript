// Object is a group of proprieties and methods.
// Proprietis is what an object has, like a color.
// Methods is what an object can do.

const car = {
    model:'Mustang',
    color:'BLue',
    year:2023,

    drive : function() {
        console.log(`You drive the ${this.model}`);
    },
    brake : function() {
        console.log('You step on the brakes');
    }
}


const car2 = {
    model:'Corvette',
    color:'red',
    year:2023,

    drive : function() {
        console.log(`You drive the ${this.model}`);
    },
    brake : function() {
        console.log('You step on the brakes');
    }
}

// Car 1 test
console.log(car.color, car.model, car.year);

car.drive();
car.brake();

// Car 2 test
console.log(car2.color, car2.model, car2.year);

car2.drive();
car2.brake();
