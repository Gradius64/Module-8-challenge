// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
///import Vehicle from './Vehicle.js';



/////import Car from './Car.js';

//import AbleToTow from '../interfaces/AbleToTow.js';


//import AbleToTow from './AbleToTow.js';

class AbleToTow {
  constructor(public make: string, public model: string) {}

  displayInfo() {
      console.log(`AbleToTow: ${this.make} ${this.model}`);
  }
}


///import Motorbike from './Motorbike.js';

class Motorbike {
  constructor(public make: string, public model: string) {}

  displayInfo() {
      console.log(`Motorbike: ${this.make} ${this.model}`);
  }
}






//import Wheel from './Wheel.js';


class Wheel {
  constructor(public make: string, public model: string) {}

  displayInfo() {
      console.log(`Motorbike: ${this.make} ${this.model}`);
  }
}





const x = 'name';
console.log(x);



// TODO: Declare properties of the Truck class
const Truck1 = {
  Truck1: "Toyota",
  color: "Red",
  size: "Medium",
};

const Truck2 = {
  Truck2: "Chevy",
  color: "gray",
  size: "Large",
};

const Truck3 = {
  Truck3: "Mazda",
  color: "orange",
  size:"medi"

};



  


  // Constructor method to initialize properties
  

  // Constructor method to initialize properties
  
        
  
  
  
  

  
  



 


  
   
  


    


  
     
 
  
  
      




  



  

  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
interface Wheel {
  size: number; // size of the wheel
  type: string; // type of the wheel (e.g., alloy, steel)
}



class vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;
  }
}





  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  
  class Vehicle {
    vin: string;          // Vehicle Identification Number
    color: string;       // Color of the vehicle
    make: string;        // Manufacturer of the vehicle
    model: string;       // Model of the vehicle
    year: number;        // Year of manufacture
    weight: number;      // Weight of the vehicle
    topSpeed: number;    // Maximum speed of the vehicle
    wheels: Wheel[];     // Array of wheels
    towingCapacity: number; // Towing capacity of the vehicle
  
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number
    ) {
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      this.wheels = wheels;
      this.towingCapacity = towingCapacity;
    }
  }

  // TODO: Create a constructor that accepts the properties of the Truck class
 class Truck {
  constructor(private model: string, private weight: string) {}
  getTruckName(): string {
    return `${this.model} ${this.weight}`
}
describe(): string {
    return `${this.model} ${this.weight}.`;
}


      
      
  
    
        

  
    
      

        

        
          
    // TODO: The constructor should initialize the properties of the Truck class
    


   
        
   
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    
    
    const(make: Wheel, model: Wheel, year: Wheel, color: Wheel) {

      
       


    
    

  // TODO: Implement the tow method from the AbleToTow interface

  class AbleToTow {

    tow() {
      throw new Error("Method 'tow()' must be implemented.");
    }
}

    // TODO: Get the make an model of the vehicle if it exists
    interface Vehicle {
      make: string;
      model: string;
  }



    const vehicles: Vehicle[] = [

      { make: 'Toyota', model: 'Corolla' },

      { make: 'Mazda',model: 'Chevy' },

      { make: 'Harley-Davidson', model: 'Street 750' }

    ];





 



      
      
   


    


    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity

    class Truck {

      make: string;
    model: string;
    year: number;
    payloadCapacity: number; // Payload capacity of the truck
    towingCapacity: number; 

    constructor(make: string, model: string, year: number, payloadCapacity: number, towingCapacity: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.payloadCapacity = payloadCapacity;
      this.towingCapacity = towingCapacity;
  }
    



    // TODO: If it is, log that the vehicle is being towed
    canTow(vehicleWeight: number): boolean {
      if (vehicleWeight <= this.towingCapacity) {
          console.log(`The vehicle weighing ${vehicleWeight} lbs is being towed by the ${this.make} ${this.model}.`);
          return true;
      } else {
          console.log(`The vehicle weighing ${vehicleWeight} lbs cannot be towed by the ${this.make} ${this.model}.`);
          return false;
      }
    }
    

    
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    canBeTowed(towingLimit: number): boolean {
      
          console.log("The vehicle is too heavy to be towed.");
          return false;
      }
      

  
     
   
    


  // TODO: Override the printDetails method from the Vehicle class
  printDetails() {
    return `${this.year} ${this.make} ${this.model}`;
}
}

    // TODO: The method should call the printDetails method of the parent class
    class Parent {
      printDetails() {
          console.log("Details from the parent class.");
      }
  }


    // TODO: The method should log the details of the Truck
    
   
      
  
      

    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels


// Export the Truck class as the default export




// Car class that extends Vehicle class
//class Car extends Vehicle {
  // Declare properties of the Car class
  //vin: string;
  //color: string;
  //make: string;
  //model: string;
  //year: number;
  //weight: number;
  //topSpeed: number;
  //wheels: Wheel[];

  // Constructor for the Car class
  //constructor(
    //vin: string,
    //color: string,
    //make: string,
    //model: string,
    //year: number,
    //weight: number,
    //topSpeed: number,
    //wheels: Wheel[]
  //) {
    // Call the constructor of the parent class, Vehicle
   // super();

    // Initialize properties of the Car class
    //this.vin = vin;
    //this.color = color;
    //this.make = make;
    //this.model = model;
    //this.year = year;
    //this.weight = weight;
    //this.topSpeed = topSpeed;
    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    //if (wheels.length !== 4) {
      //this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
   // } else {
     // this.wheels = wheels;
    
  
  

}
}

