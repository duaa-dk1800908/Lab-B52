class ShowRoom{
    constructor(vehicles){
        this.vehicles = vehicles;
    }
    addVehicles(vehicle){
        this.vehicles.push(vehicle)
    }
}
module.exports = ShowRoom;