// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import { SpaceLocation } from './SpaceLocation';


// Part 1: Declare (5) Variables With Type
const spaceCraftName:string = 'Determination';
const speedMph:number = 17500;
const kilometersToMars:number = 225000000;
const kilometersToTheMoon:number = 384400;
const milesPerKilometer:number = 0.621;

// Part 2: Print Days to Mars
let milesToMars:number = kilometersToMars * milesPerKilometer;
let hoursToMars:number = milesToMars / speedMph;
let daysToMars:number = hoursToMars / 24;

console.log(`It would take the ${spaceCraftName} ${daysToMars} days to get to Mars`);

// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")
const getDaysToLocation = (kilometersAway:number):number => {
let milesTo:number = kilometersAway * milesPerKilometer;
let hoursTo:number = milesTo / speedMph;
let daysTo:number = hoursTo / 24;

return daysTo;
}


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

console.log(`It takes ${getDaysToLocation(kilometersToMars)} days for ${spaceCraftName} to arrive at Mars, and ${getDaysToLocation(kilometersToTheMoon)} to arrive at the Moon`)


// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer:number = 0.621;

    constructor(private name:string, private speedMph:number) {}

    getDaysToLocation = (kilometersAway:number):number => {
        let milesTo:number = kilometersAway * this.milesPerKilometer;
        let hoursTo:number = milesTo / this.speedMph;
        let daysTo:number = hoursTo / 24;

        return daysTo;
    }

    public getName = ():string => this.name;

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}

let spaceShuttle = new Spacecraft('Determination', 17500);

console.log(`It takes ${spaceShuttle.getDaysToLocation(kilometersToMars)} days for ${spaceShuttle.getName()} to arrive at Mars, and ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} to arrive at the Moon`)
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
