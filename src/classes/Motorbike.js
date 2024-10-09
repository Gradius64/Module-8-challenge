"use strict";
// Importing Vehicle and Wheel classes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_js_1 = __importDefault(require("./Vehicle.js"));
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle_js_1.default {
    // Constructor for the Vehicle class
    constructor(vin) {
        super();
        this.vin = vin;
    }
}
const Motorbike2 = {
    color: "Green",
    size: "Large",
    year: "2006",
};
// TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
// TODO: Create a constructor that accepts the properties of the Motorbike class
const vehicle = {
    Motorbike1: "Chevy",
    Motorbike2: "Toyota",
    Motorbike3: "Mazda",
};
// Create a Motorbike 
const motorbike = new Motorbike("vin");
// Motorbike { make: 'Honda', model: 'CBR600RR', year: 2022, color: 'Red' }
// TODO: The constructor should call the constructor of the parent class, Vehicle
class motorbike1 extends Vehicle_js_1.default {
}
