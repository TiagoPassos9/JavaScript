class Car {
    constructor(power) {
        //this.powar = power;
        // A underline propriety is a protected propriety.
        this._power = power;
        this._gas = 25;
    }
    // Propriety and method can't have the same name.
    get power() {
        return `${this._power}hp`;
    }
    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value) {
        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);

// car.power cannot be updated without a set method.
car.power = 1000000;

console.log(car.power);

car.gas = 40;

console.log(car.gas);
