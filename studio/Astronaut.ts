import { Payload } from './Payload'

class Astronaut implements Payload {
    
    constructor(public massKg:number, public name:string) { }

}

export default Astronaut