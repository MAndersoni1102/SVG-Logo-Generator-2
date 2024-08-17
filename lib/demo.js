class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine(){
        console.log('Starting engine...');
    }
    drive(){
        console.log('Driving vehicle...');
    }
    stopEngine() {
        console.log('Stopping engine...');
    }
    describe(){
        console.log(`This vehicle is a ${this.year} ${this.make} ${this.model}`);
    }
}
const vehicle1 = new Vehicle("Ford", "Mustang", 1964)
const vehicle2 = new Vehicle("Tesla", "Model X", 2017)
vehicle1.describe()
vehicle2.describe()