const carProto = {
    name: "unknown",
    price: "unknown",

    getInfo: function(){
        console.log("Name - ", this.name)
    },
    clone: function(){
        const car = Object.create(this);

        car.name = this.name;
        car.price = this.price;

        return car
    }
}

const car1 = Object.create(carProto)
car1.name = "Mercedes Benz"
car1.price = 10000

const car2 = car1.clone()
car2.name = "BMW"
car2.price = 25000

car1.getInfo()
car2.getInfo()