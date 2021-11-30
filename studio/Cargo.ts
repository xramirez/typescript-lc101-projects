import { Payload } from "./Payload";

class Cargo implements Payload {
 
    constructor(public massKg:number, public material:string) { }

}

export default Cargo