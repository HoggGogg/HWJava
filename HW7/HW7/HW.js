class Car{
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
        drive () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        info () {
            for (const key in this) {
                console.log(key, this[key]);
            }
        };
        increaseMaxSpeed (newSpeed) {
            if (newSpeed > 0)
                this.maxSpeed = this.maxSpeed + newSpeed;
        };
        changeYear (newYear) {
            if (newYear > 1815)
                this.year = newYear;
        };
        addDriver (driverObj) {
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