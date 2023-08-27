function Car() {
    this.name = "Mercedes"
    this.startCar = function () {
      console.log("car started")
    }
}

function Truck() {
    this.name = "Tata"
    this.startTruck = function () {
      console.log("truck started")
    }
}

const VehicleFactory = {
  createVehicle: function(type) {
    let instance;

    switch (type) {
      case "car":
        instance = new Car();
        break;
      case "truck":
        instance = new Truck();
        break;
      default:
        instance = new Car();
    }

    return instance;
  }
};

const car1 = VehicleFactory.createVehicle("car");
car1.startCar();

const truck1 = VehicleFactory.createVehicle("truck");
truck1.startTruck();