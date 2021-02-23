/*
let vehicle = {
    engine : 6,
    model : 'BMW X5',
    insurance(){
        if(this.engine >= 6) return 1000;
        else return 500;
    },
    toString(){
        return `
                       Car Information
                     Engine : ${this.engine}
                     Model :${this.model},
                     Insurance :${this.insurance()},
        `
    }
}
 */

const Bus = require("./model/Bus");
const Truck = require("./model/Truck");
const ShowRoom = require("./model/ShowRoom");

const bus2 = new Bus('BMW', 12, 60);
const truck2 = new Truck('TOYOTA', 12, 16000);

let vehicles = [new Bus('TATA', 12, 80),
    new Truck('VOLVO', 12, 6000)
]

const showRoom = new ShowRoom(vehicles)
showRoom.addVehicles(truck2)
console.log(showRoom.vehicles)

// 2:50