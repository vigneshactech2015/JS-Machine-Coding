// Base class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} is now started.`);
  }

  displayDetails() {
    console.log(`Vehicle Details: ${this.year} ${this.make} ${this.model}`);
  }
}

// Subclass inheriting from Vehicle
class ElectricCar extends Vehicle {
  constructor(make, model, year, batteryLife) {
    super(make, model, year); // Call the parent class constructor
    this.batteryLife = batteryLife; // Add additional property
  }

  // Overriding the start method --> this is example of polymorphism since over riding the previous start method 
  start() {
    console.log(`${this.make} ${this.model} (Electric) is now started silently.`);
  }

  // New method specific to ElectricCar
  charge() {
    console.log(`Charging ${this.make} ${this.model}. Battery life: ${this.batteryLife}%`);
  }
}

// Create instances of Vehicle and ElectricCar
const myVehicle = new Vehicle('Toyota', 'Camry', 2022);
const myElectricCar = new ElectricCar('Tesla', 'Model S', 2023, 85);

// Use the methods
myVehicle.start(); // Output: Toyota Camry is now started.
myVehicle.displayDetails(); // Output: Vehicle Details: 2022 Toyota Camry

myElectricCar.start(); // Output: Tesla Model S (Electric) is now started silently.
myElectricCar.displayDetails(); // Output: Vehicle Details: 2023 Tesla Model S
myElectricCar.charge(); // Output: Charging Tesla Model S. Battery life: 85%
