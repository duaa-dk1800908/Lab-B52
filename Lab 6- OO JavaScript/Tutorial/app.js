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
let vehicle2 = {
    engine : 5,
    model : 'Mercedes GLC',
    insurance : function(){
        if(this.engine >= 6) return 1000;
        else return 500;
    },
    toString : function (){
        return `
                       Car Information
                     Engine : ${this.engine} 
                     Model :${this.model},
                     Insurance :${this.insurance()},
        `
    }
}

vehicle.color = 'White'

console.log(vehicle)
console.log(vehicle2)
