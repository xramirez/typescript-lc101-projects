"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        var _this = this;
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
        this.sumMass = function (items) { return items.reduce(function (sum, item) { return sum + item.massKg; }, 0); };
        this.currentMassKg = function () { return _this.sumMass(_this.cargoItems) + _this.sumMass(_this.astronauts); };
        this.canAdd = function (item) { return _this.currentMassKg() + item.massKg <= _this.totalCapacityKg; };
        this.addCargo = function (cargo) {
            if (_this.canAdd(cargo)) {
                _this.cargoItems.push(cargo);
                return true;
            }
            return false;
        };
        this.addAstronaut = function (astronaut) {
            if (_this.canAdd(astronaut)) {
                _this.astronauts.push(astronaut);
                return true;
            }
            return false;
        };
    }
    return Rocket;
}());
exports["default"] = Rocket;
