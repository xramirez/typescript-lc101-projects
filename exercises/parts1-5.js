"use strict";
exports.__esModule = true;
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spaceCraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
console.log("It would take the ".concat(spaceCraftName, " ").concat(daysToMars, " days to get to Mars"));
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
var getDaysToLocation = function (kilometersAway) {
    var milesTo = kilometersAway * milesPerKilometer;
    var hoursTo = milesTo / speedMph;
    var daysTo = hoursTo / 24;
    return daysTo;
};
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("It takes ".concat(getDaysToLocation(kilometersToMars), " days for ").concat(spaceCraftName, " to arrive at Mars, and ").concat(getDaysToLocation(kilometersToTheMoon), " to arrive at the Moon"));
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        var _this = this;
        this.name = name;
        this.speedMph = speedMph;
        this.milesPerKilometer = 0.621;
        this.getDaysToLocation = function (kilometersAway) {
            var milesTo = kilometersAway * _this.milesPerKilometer;
            var hoursTo = milesTo / _this.speedMph;
            var daysTo = hoursTo / 24;
            return daysTo;
        };
        this.getName = function () { return _this.name; };
    }
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 17500);
console.log("It takes ".concat(spaceShuttle.getDaysToLocation(kilometersToMars), " days for ").concat(spaceShuttle.getName(), " to arrive at Mars, and ").concat(spaceShuttle.getDaysToLocation(kilometersToTheMoon), " to arrive at the Moon"));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
