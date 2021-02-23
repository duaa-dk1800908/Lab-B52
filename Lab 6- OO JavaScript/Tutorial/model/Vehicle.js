class Vehicle{
    //constructor
    constructor(model , engine){
        this.model = model;
        this.engine = engine;
    }
    //methods
    insurance() {
        if(this.engine >= 6) return 1000;
        else return 500;
    }
    toString(){
        return `
                       Car Information
                     Engine : ${this.engine} 
                     Model :${this.model},
                     Insurance :${this.insurance()},
        `
    }
}
module.exports = Vehicle;