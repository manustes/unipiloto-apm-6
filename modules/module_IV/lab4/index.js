var Car = (function () {
    function Car() {
    }
    ;
    Car.prototype.setWheel = function (wheel) {
        this.wheel = wheel;
    };
    Car.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.getFuel = function () {
        return this.fuel;
    };
    Car.prototype.getWheel = function () {
        return this.wheel;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    return Car;
}());
var Motorcycle = (function () {
    function Motorcycle(deluxe) {
        this.deluxe = deluxe;
    }
    Motorcycle.prototype.setWheel = function (wheel) {
        this.wheel = wheel;
    };
    Motorcycle.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
    };
    Motorcycle.prototype.setColor = function (color) {
        this.color = color;
    };
    Motorcycle.prototype.getFuel = function () {
        return this.fuel;
    };
    Motorcycle.prototype.getWheel = function () {
        return this.wheel;
    };
    Motorcycle.prototype.getColor = function () {
        return this.color;
    };
    return Motorcycle;
}());
var car = new Car();
car.setWheel(20);
car.setColor("white");
var motorcycle = new Motorcycle(false);
console.log(car);
console.log(motorcycle);
