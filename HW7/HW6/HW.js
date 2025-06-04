function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0)
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newYear) {
        if (newYear > 1815)
        this.year = newYear;
    };
    this.addDriver = function (driverObj) {
        if (driverObj)
        this.driver = driverObj;
    }
}

const car = new Car('Toyota', 'Japan', 1936, 270, 3.5)
console.log(car)

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});

console.log(car)
