import Cargo from "./Cargo"
import Astronaut from "./Astronaut"
import { Payload } from "./Payload"

class Rocket {

    private cargoItems: Cargo[] = []
    private astronauts: Astronaut[] = []

    constructor(public name:string, public totalCapacityKg:number) { }

    sumMass = (items: Payload[]):number => items.reduce((sum, item) => sum + item.massKg, 0)

    currentMassKg = ():number => this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)

    canAdd = (item: Payload):boolean => this.currentMassKg() + item.massKg <= this.totalCapacityKg

    addCargo = (cargo: Cargo):boolean => {
        if(this.canAdd(cargo)) { 
            this.cargoItems.push(cargo)
            return true
        }
        return false
    }

    addAstronaut = (astronaut: Astronaut):boolean => {
        if(this.canAdd(astronaut)) { 
            this.astronauts.push(astronaut)
            return true
        }
        return false
    }
}

export default Rocket