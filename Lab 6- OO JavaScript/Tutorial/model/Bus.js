//numberOfPassengers
const Vehicle = require('./Vehicle')

class Bus extends Vehicle {
    constructor(model, engine, noOfPass) {
        super(model, engine);
        this.noOfPass = noOfPass;
    }
}

module.exports = Bus;